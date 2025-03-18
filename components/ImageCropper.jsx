"use client";
import { useRef, useState, useCallback } from "react";
import Dropzone from "./Dropzone";
import CropperComponent from "./CropperComponent";
import SettingsPanel from "./SettingsPanel";
import CroppedImagePreview from "./CroppedImagePreview";

export default function ImageCropper() {
  const [uploadedFileName, setUploadedFileName] = useState("cropped-image");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cropperRef = useRef(null);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [format, setFormat] = useState("png");
  const [aspectRatio, setAspectRatio] = useState(NaN);
  const [unit, setUnit] = useState("px");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          setWidth(img.naturalWidth);
          setHeight(img.naturalHeight);
        };
        img.src = reader.result;
        setImage(reader.result);

        const fileFormat = file.type.split("/")[1]; 
        const fileName = file.name.split(".").slice(0, -1).join(".");
        setFormat(fileFormat || "png");
        setUploadedFileName(fileName); 
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDownload = () => {
    if (croppedImage) {
      const link = document.createElement("a");
      link.href = croppedImage;
      link.download = `${uploadedFileName}.${format}`; 
      link.click();
    }
  };

  const convertToPx = (value) => (unit === "cm" ? value * 37.8 : value);

  const handleCrop = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      const croppedData = cropper.getData();

      setWidth(croppedData.width);
      setHeight(croppedData.height);

      const canvas = cropper.getCroppedCanvas({
        width: convertToPx(croppedData.width),
        height: convertToPx(croppedData.height),
      });

      if (canvas) {
        setCroppedImage(canvas.toDataURL(`image/${format}`));
        setIsModalOpen(true);
      }
    }
  };


  return (
    <div className="container mx-auto pt-20">
      {!image ? (
        <Dropzone onDrop={onDrop} />
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-3 px-10">
            <CropperComponent
              {...{ image, cropperRef, aspectRatio }}
            />
            <SettingsPanel
              {...{
                aspectRatio,
                setAspectRatio,
                width,
                setWidth,
                height,
                setHeight,
                unit,
                setUnit,
                format,
                setFormat,
                handleCrop,
              }}
            />
          </div>
          <CroppedImagePreview
            croppedImage={croppedImage}
            format={format}
            handleDownload={handleDownload}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </>
      )}
    </div>
  );
}
