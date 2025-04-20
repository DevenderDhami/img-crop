"use client";
import { SignOutButton } from "@clerk/nextjs";

const Logout = () => {
  return (
    <div className="w-full">
      <SignOutButton>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">
          Logout
        </button>
      </SignOutButton>
    </div>
  );
};

export default Logout;
