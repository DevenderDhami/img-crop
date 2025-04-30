'use client';

import React, { useState, useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function ImageToPDF() {
    const [images, setImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const previewRefs = useRef([]);

    const handleFilesChange = (e) => {
        const files = Array.from(e.target.files || []);
        setImages(files);

        const newPreviews = files.map(file => URL.createObjectURL(file));
        setPreviews(newPreviews);
        previewRefs.current = [];
    };

    const generatePDF = async () => {
        if (previewRefs.current.length === 0) return;

        const pdf = new jsPDF();

        for (let i = 0; i < previewRefs.current.length; i++) {
            const node = previewRefs.current[i];
            const canvas = await html2canvas(node, { useCORS: true });
            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const width = pdf.internal.pageSize.getWidth();
            const height = (canvas.height * width) / canvas.width;

            if (i !== 0) pdf.addPage();
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        }

        const baseName = images[0]?.name.replace(/\.[^/.]+$/, '') || 'images';
        pdf.save(`${baseName}.pdf`);
    };


    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Image to PDF Converter
            </h1>

            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFilesChange}
                className="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                {previews.map((src, idx) => (
                    <div
                        key={idx}
                        ref={(el) => {
                            if (el) previewRefs.current[idx] = el;
                        }}
                        className="w-full h-40 bg-white overflow-hidden flex items-center justify-center"
                    >
                        <img
                            src={src}
                            alt={`preview-${idx}`}
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={generatePDF}
                className="px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
                Download PDF
            </button>
        </div>
    );
}
