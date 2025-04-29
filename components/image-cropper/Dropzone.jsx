  import { useDropzone } from "react-dropzone";

  export default function Dropzone({ onDrop }) {
    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: "image/*",
      multiple: false,
    });

    return (
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-center py-5">Crop Image</h2>
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-500 p-10 w-[60vw] bg-gray-200 dark:bg-gray-800 hover:shadow-xl text-center rounded cursor-pointer"
          >
            <input {...getInputProps()} />
            <p className="text-gray-600 text-xl">
              Drag & drop an image here, or click to select
            </p>
          </div>
        </div>
      </div>
    );
  }
