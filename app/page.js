import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="container text-3xl py-22 mx-auto">
        
        <Link href={"/img-crop"}>click here</Link>
      </div>
    </div>
  );
}
