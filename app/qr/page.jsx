"use client";

import { useState } from "react";
import PreviewImage from "@/components/qr-generator/PreviewImage";
import ImageDrag from "@/components/qr-generator/ImageDrag";
import QrComponent from "@/components/qr-generator/QrComponent";

export default function QRCodeGenerator() {
    const [text, setText] = useState("");
    const [imageSrc, setImageSrc] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) handleImageUpload({ target: { files: [file] } });
    };

    return (
        <div className="p-6 text-center max-w-5xl mx-auto  text-gray-800 dark:text-gray-100 transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6">QR Code Generator</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col w-full">
                    {/* Text Input */}
                    <div className="mb-6 text-left">
                        <label className="block font-semibold mb-2">Enter Text or URL</label>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter text or URL"
                            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white p-3 w-full h-24 rounded-lg shadow-sm focus:ring focus:ring-blue-300 dark:focus:ring-blue-600"
                        />
                    </div>

                    <div className="w-full">
                        {imageSrc ? (
                            <PreviewImage imageSrc={imageSrc} setImageSrc={setImageSrc} />
                        ) : (
                            <ImageDrag handleDrop={handleDrop} handleImageUpload={handleImageUpload} />
                        )}
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-1/3">
                    <QrComponent text={text} imageSrc={imageSrc} />
                </div>
            </div>
        </div>
    );
}
