"use client";
import { SignOutButton } from "@clerk/nextjs";

const Logout = () => {
  return (
    <div className="w-full">
      <SignOutButton>
        <button className="w-full hover:border hover:border-red-950 py-2 rounded-lg">
          Logout
        </button>
      </SignOutButton>
    </div>
  );
};

export default Logout;
