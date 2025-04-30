import { IMG_CROP, PDF, QR } from "@/components/constant";
import { CiCrop } from "react-icons/ci";
import { FaFilePdf, FaHome, FaInfoCircle, FaPhone, FaQrcode, FaServicestack } from "react-icons/fa";

export const ToolsList = [
  { label: "Image Cropper", link: IMG_CROP, icon: CiCrop },
  { label: "Qr Generator", link: QR, icon: FaQrcode },
  { label: "PDF", link: PDF, icon: FaFilePdf },
];

export const PdfToolsList = [
  { label: "Image to Pdf", link: "/pdf/img-pdf", icon: CiCrop },
  // { label: "excel to Pdf", link: QR, icon: FaQrcode },
  // { label: "Word to Pdf", link: PDF, icon: FaFilePdf },
];
