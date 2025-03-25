"use client";

import { useState, useEffect, useRef } from "react";
import PreviewImage from "@/components/qr-generator/PreviewImage";
import ImageDrag from "@/components/qr-generator/ImageDrag";
import QrComponent from "@/components/qr-generator/QrComponent";

export default function QRCodeGenerator() {
    const [text, setText] = useState("");
    const [imageSrc, setImageSrc] = useState(null);


    // Handle Image Upload (Optional)
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageSrc(reader.result); // Convert image to base64
        };
        reader.readAsDataURL(file);
    };

    // Handle Drag & Drop
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) handleImageUpload({ target: { files: [file] } });
    };

    return (
        <div className="p-6 text-center max-w-5xl  mx-auto bg-gray-100 ">
            <h2 className="text-2xl font-bold mb-6">QR Code Generator</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col w-full ">
                    {/* Text Input */}
                    <div className="mb-6">
                        <label className="block font-semibold mb-2">Enter Text or URL</label>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter text or URL"
                            className="border p-3 w-full h-24 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
                        />
                    </div>

                    <div className="w-full">
                        {imageSrc ? (
                            <PreviewImage
                                imageSrc={imageSrc}
                                setImageSrc={setImageSrc}
                            />
                        ) : (
                            <ImageDrag
                                handleDrop={handleDrop}
                                handleImageUpload={handleImageUpload}
                            />
                        )}
                    </div>
                </div>

                <div className="flex flex-col w-full md:w-1/3">
                    <QrComponent text={text} imageSrc={imageSrc}/>
                </div>
            </div>
        </div>
    );
}
