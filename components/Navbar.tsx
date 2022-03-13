import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="head h-16 flex items-center justify-around bg-cyan-50">
        <Link href={"/"}>
          <div className="text-2xl font-extrabold cursor-pointer">
            Consensus
          </div>
        </Link>
        <div className="">Signup</div>
      </div>
    </div>
  );
};

export default Navbar;
