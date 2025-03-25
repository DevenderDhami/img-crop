import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const PreviewImage = ({imageSrc,setImageSrc}) => {
    const removeImage = () => {
        setImageSrc(null);
    };
    return (
        <div className="relative inline-block">
            {/* Uploaded Image Preview */}
            <img
                src={imageSrc}
                alt="Uploaded"
                className="h-60 w-auto object-fit rounded border shadow"
            />

            {/* Remove Image Button */}
            <button
                onClick={removeImage}
                className="absolute cursor-pointer p-3 -top-2 right-0 bg-red-500 text-white  rounded-full transform translate-x-1 -translate-y-1 hover:bg-red-600 transition"
            >
                <FaTrashAlt />
            </button>
        </div>
    )
}

export default PreviewImage