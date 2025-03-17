import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function CropperComponent({
  image,
  cropperRef,
  brightness,
  contrast,
  aspectRatio,
}) {
  return (
    <Cropper
      ref={cropperRef}
      src={image}
      style={{
        width: "100%",
        height: "400px",
        maxHeight: "400px",
        filter: `brightness(${brightness}%) contrast(${contrast}%)`,
      }}
      aspectRatio={isNaN(aspectRatio) ? undefined : aspectRatio}
      viewMode={1}
      guides={false}
      zoomOnWheel={false}
      zoomOnTouch={false}
    />
  );
}
