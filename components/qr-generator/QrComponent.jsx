import { toPng, toJpeg, toSvg } from 'html-to-image';
import { QRCodeCanvas } from 'qrcode.react';
import React, { useRef, useState } from 'react';
import { FaDownload } from 'react-icons/fa';

const QrComponent = ({ text, imageSrc }) => {
    const qrRef = useRef(null);
    const [format, setFormat] = useState("png");

    // Download based on selected format
    const downloadQR = () => {
        if (!qrRef.current) return;

        const node = qrRef.current;
        let downloadFunc;

        switch (format) {
            case "jpeg":
                downloadFunc = toJpeg;
                break;
            case "svg":
                downloadFunc = toSvg;
                break;
            case "png":
            default:
                downloadFunc = toPng;
        }

        downloadFunc(node, { quality: 0.95 })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = `qr_code.${format}`;
                link.click();
            })
            .catch((err) => console.error("Failed to download QR code:", err));
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            {text && (
                <>
                    <div ref={qrRef} className="inline-block bg-white p-2 border shadow-lg rounded-lg">
                        <QRCodeCanvas
                            value={text}
                            size={200}
                            bgColor={"#ffffff"}
                            fgColor={"#000000"}
                            level={"H"}
                            includeMargin={true}
                            imageSettings={
                                imageSrc
                                    ? {
                                        src: imageSrc,
                                        height: 40,
                                        width: 40,
                                        excavate: true,
                                    }
                                    : undefined
                            }
                        />
                    </div>

                    {/* Format Selection */}
                    <div className="mt-4 w-full px-4">
                        <select
                            value={format}
                            onChange={(e) => setFormat(e.target.value)}
                            className="border px-2 py-1 rounded-md text-black dark:text-white bg-white dark:bg-gray-800 dark:border-gray-600 w-full "
                        >
                            <option value="png">PNG</option>
                            <option value="jpeg">JPEG</option>
                            <option value="svg">SVG</option>
                        </select>
                    </div>

                    {/* Download Button */}
                    <button
                        onClick={downloadQR}
                        className="mt-4 flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                    >
                        <FaDownload /> Download QR Code
                    </button>
                </>
            )}
        </div>
    );
};

export default QrComponent;
