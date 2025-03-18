import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function CropperComponent({
  image,
  cropperRef,
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
      }}
      aspectRatio={isNaN(aspectRatio) ? undefined : aspectRatio}
      viewMode={1}
      guides={false}
      zoomOnWheel={false}
      zoomOnTouch={false}
    />
  );
}
