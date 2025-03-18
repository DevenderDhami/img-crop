import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export default function CroppedImagePreview({ croppedImage, format, handleDownload, isOpen, onClose }) {
  const [imageSize, setImageSize] = useState({ width: "auto", height: "auto" });

  useEffect(() => {
    if (croppedImage) {
      const img = new window.Image();
      img.src = croppedImage;
      img.onload = () => {
        setImageSize({ width: img.width, height: img.height });
      };
    }
  }, [croppedImage]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl bg-white p-5 rounded-lg shadow-xl max-h-[90vh] overflow-auto">
            <Dialog.Title className="text-lg font-bold">Cropped Image</Dialog.Title>

            <div className="mt-2 flex justify-center">
              <img
                src={croppedImage}
                alt="Cropped"
                style={{
                  maxWidth: "100%",
                  maxHeight: "70vh", // Prevents overflow
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={onClose} className="p-2 bg-gray-300 text-black rounded">Close</button>
              <button onClick={handleDownload} className="p-2 bg-green-500 text-white rounded">
                Download as {format.toUpperCase()}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
