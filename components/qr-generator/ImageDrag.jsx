'use client';

import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const ImageDrag = ({ handleDrop, handleImageUpload }) => {
    const handleDragOver = (e) => e.preventDefault();

    return (
        <div
            className="bg-gray-200 dark:bg-gray-800 border-dashed border-2 border-gray-400 dark:border-gray-600 p-6 rounded-lg cursor-pointer text-gray-600 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 transition duration-300 flex flex-col items-center"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="imageUpload"
            />

            <label htmlFor="imageUpload" className="text-center flex flex-col items-center cursor-pointer">
                <FaCloudUploadAlt className="text-4xl text-blue-500 mb-2" />
                <span className="text-sm">
                    Drag & Drop an image here or{' '}
                    <span className="text-blue-600 dark:text-blue-400 underline">Browse</span>
                </span>
            </label>
        </div>
    );
};

export default ImageDrag;
