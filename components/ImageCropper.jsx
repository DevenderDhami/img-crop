"use client";

import { useRef, useState, useCallback } from "react";
import Cropper from "react-cropper";
import { useDropzone } from "react-dropzone";

export default function ImageCropper() {
  const cropperRef = useRef(null);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [format, setFormat] = useState("png");
  const [aspectRatio, setAspectRatio] = useState(1);
  const [unit, setUnit] = useState("px");
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

  // Convert cm to pixels
  const convertToPx = (value) => (unit === "cm" ? value * 37.8 : value);

  // Handle drag & drop
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  // Crop image with width & height
  const handleCrop = () => {
    if (cropperRef.current) {
      const canvas = cropperRef.current.cropper.getCroppedCanvas({
        width: convertToPx(width),
        height: convertToPx(height),
      });

      if (canvas) {
        // Apply filters before cropping
        const ctx = canvas.getContext("2d");
        ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;
        ctx.drawImage(canvas, 0, 0);

        setCroppedImage(canvas.toDataURL(`image/${format}`));
      }
    }
  };

  // Download cropped image
  const handleDownload = () => {
    if (croppedImage) {
      const link = document.createElement("a");
      link.href = croppedImage;
      link.download = `cropped-image.${format}`;
      link.click();
    }
  };

  return (
    <>
      <div className="container mx-auto">
        {/* Drag & Drop Upload */}

        {image ? (
          <>
            <div className="flex flex-col md:flex-row gap-3 bg-red-200">
              <div className="cropper w-full md:w-3/5 ">
                <Cropper
                  ref={cropperRef}
                  src={image}
                  style={{
                    height: 400,
                    width: "100%",
                    filter: `brightness(${brightness}%) contrast(${contrast}%)`,
                  }}
                  aspectRatio={aspectRatio}
                  viewMode={1}
                  guides={false}
                />
              </div>

              <div className="settings flex flex-col w-full md:w-2/5">
                {/* Aspect Ratio Selection */}
                <div className="mt-4">
                  <label className="mr-2 font-semibold">Aspect Ratio:</label>
                  <select
                    className="border p-2 rounded"
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(parseFloat(e.target.value))}
                  >
                    <option value="1">Square (1:1)</option>
                    <option value="16/9">Wide (16:9)</option>
                    <option value="4/3">Standard (4:3)</option>
                    <option value="NaN">Free Crop</option>
                  </select>
                </div>

                {/* Format Selection */}
                <div className="mt-2">
                  <label className="mr-2 font-semibold">Format:</label>
                  <select
                    className="border p-2 rounded"
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                  >
                    <option value="png">PNG</option>
                    <option value="jpeg">JPG</option>
                    <option value="webp">WebP</option>
                  </select>
                </div>

                {/* Width & Height Input */}
                <div className="mt-4 flex space-x-4">
                  <div>
                    <label className="block font-semibold">Width:</label>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(parseFloat(e.target.value))}
                      className="border p-2 rounded w-24"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">Height:</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(parseFloat(e.target.value))}
                      className="border p-2 rounded w-24"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">Unit:</label>
                    <select
                      className="border p-2 rounded"
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                    >
                      <option value="px">Pixels (px)</option>
                      <option value="cm">Centimeters (cm)</option>
                    </select>
                  </div>
                </div>

                {/* Brightness & Contrast Sliders */}
                <div className="mt-4">
                  <label className="block font-semibold">Brightness:</label>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    value={brightness}
                    onChange={(e) => setBrightness(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label className="block font-semibold">Contrast:</label>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={contrast}
                  onChange={(e) => setContrast(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <button
              onClick={handleCrop}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Crop Image
            </button>
          </>
        ) : (
          <>
            <div
              {...getRootProps()}
              className="border-2 border-dashed p-10 text-center rounded cursor-pointer"
            >
              <input {...getInputProps()} />
              <p className="text-gray-600">
                Drag & drop an image here, or click to select
              </p>
            </div>
          </>
        )}

        {croppedImage && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Cropped Image:</h2>
            <img
              src={croppedImage}
              alt="Cropped"
              className="mt-2 rounded shadow-md"
            />
            <button
              onClick={handleDownload}
              className="mt-4 p-2 bg-green-500 text-white rounded"
            >
              Download as {format.toUpperCase()}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
