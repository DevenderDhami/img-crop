import { QRCodeCanvas } from 'qrcode.react'
import React, { useRef } from 'react'
import { FaDownload } from 'react-icons/fa'

const QrComponent = ({ text, imageSrc }) => {
    const qrRef = useRef(null);

    // Download QR Code as PNG
    const downloadQR = () => {
        if (!qrRef.current) return;

        toPng(qrRef.current)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "qr_code.png";
                link.click();
            })
            .catch((err) => console.error("Failed to download QR code:", err));
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            {text && (<>
                <div ref={qrRef} className="inline-block bg-white p-2 border shadow-lg rounded-lg">
                    <QRCodeCanvas
                        value={text}
                        size={200}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"H"} // High error correction
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

                {/* Download Button */}
                <button
                    onClick={downloadQR}
                    className="mt-6 flex items-center  justify-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                >
                    <FaDownload /> Download QR Code
                </button>
            </>
            )}
        </div>
    )
}

export default QrComponent