import { QR } from "@/components/constant";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="container text-xl py-22 mx-auto flex flex-row gap-4 justify-center">
        <Link className="bg-blue-700 p-2 px-4 text-white rounded-xl" href={"/img-crop"}>Image Cropper</Link>
        <Link className="bg-blue-700 p-2 px-4 text-white rounded-xl" href={QR}>QR Generator</Link>
      </div>
    </div>
  );
}
