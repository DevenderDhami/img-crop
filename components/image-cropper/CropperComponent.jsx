import { useEffect, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function CropperComponent({ image, cropperRef, aspectRatio, setWidth, setHeight }) {
  const cropperInstance = useRef(null);

  useEffect(() => {
    if (cropperInstance.current) {
      cropperRef.current = cropperInstance.current; // Sync refs
    }
  }, []);

  const onCropMove = () => {
    if (cropperInstance.current) {
      const cropper = cropperInstance.current.cropper;
      const croppedData = cropper.getData();

      setWidth(Math.round(croppedData.width)); 
      setHeight(Math.round(croppedData.height)); 
    }
  };

  return (
    <Cropper
      ref={(instance) => {
        cropperInstance.current = instance;
        cropperRef.current = instance;
      }}
      src={image}
      style={{ width: "100%", height: "400px", maxHeight: "400px" }}
      aspectRatio={isNaN(aspectRatio) ? undefined : aspectRatio}
      viewMode={1}
      guides={true}
      background={false}
      autoCropArea={0.4}
      responsive={true}
      checkOrientation={false}
      zoomOnWheel={false}
      zoomOnTouch={false}
      cropmove={onCropMove} // Update dimensions dynamically
    />
  );
}
