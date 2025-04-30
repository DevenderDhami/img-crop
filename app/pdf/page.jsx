import { PdfToolsList, ToolsList } from "@/data/ToolsList";
import Link from "next/link";

export default function PdfTools() {
  return (
    <div className="container mx-auto flex flex-col gap-4 py-10">
      <h2 className="font-bold text-3xl text-center">
       Pdf Tools
      </h2>
      <div className=" text-xl py-22 mx-auto flex flex-row flex-wrap gap-4 justify-center">
        {PdfToolsList?.map((tool, index) =>
          <Link href={tool?.link} key={index} className="card border bg-gray-50 dark:bg-gray-700 p-3 shadow-md rounded-md hover:shadow-lg">
            <div className="icon p-3 mx-auto  flex justify-center ">
              <tool.icon size={60} className="text-xl" />
            </div>
            <p className="text-sm pt-2 font-semibold text-center" >{tool?.label}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
