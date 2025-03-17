"use client";
import { useRef, useState, useCallback } from "react";
import Dropzone from "./Dropzone";
import CropperComponent from "./CropperComponent";
import SettingsPanel from "./SettingsPanel";
import CroppedImagePreview from "./CroppedImagePreview";

export default function ImageCropper() {
  const cropperRef = useRef(null);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [format, setFormat] = useState("png");
  const [aspectRatio, setAspectRatio] = useState(NaN);
  const [unit, setUnit] = useState("px");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

  const convertToPx = (value) => (unit === "cm" ? value * 37.8 : value);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  }, []);

  const handleCrop = () => {
    if (cropperRef.current) {
      const canvas = cropperRef.current.cropper.getCroppedCanvas({
        width: convertToPx(width),
        height: convertToPx(height),
      });
      if (canvas) {
        setCroppedImage(canvas.toDataURL(`image/${format}`));
        setIsModalOpen(true);
      }
    }
  };

  const handleDownload = () => {
    if (croppedImage) {
      const link = document.createElement("a");
      link.href = croppedImage;
      link.download = `cropped-image.${format}`;
      link.click();
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto pt-20">
      {!image ? (
        <Dropzone onDrop={onDrop} />
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-3 px-10">
            <CropperComponent
              {...{ image, cropperRef, brightness, contrast, aspectRatio }}
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
                brightness,
                setBrightness,
                contrast,
                setContrast,
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
