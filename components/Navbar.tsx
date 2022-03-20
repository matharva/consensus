import Image from "next/image";
import Link from "next/link";
import React from "react";
import IMg from "../assets/cns.png";

const Navbar = () => {
  return (
    <div>
      <div className="head h-16 flex items-center justify-around bg-cyan-50">
        <Link href={"/"}>
          <div className="flex items-center justify-center">
            <div className="w-12 translate-y-1">
              <Image src={IMg} />
            </div>
            <div className="text-2xl font-extrabold cursor-pointer">
              Consensus
            </div>
          </div>
        </Link>
        <div className="">Signup</div>
      </div>
    </div>
  );
};

export default Navbar;
