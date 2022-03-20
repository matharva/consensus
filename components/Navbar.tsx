import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import IMg from "../assets/cns.png";

const Navbar = () => {
  const router = useRouter();
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
        <div
          className="font-bold text-blue-500 cursor-pointer"
          onClick={() =>
            router.push(`/poll/result/f0555d72-d946-44d5-a4c9-0881a3708c1b`)
          }
        >
          Demo
        </div>
      </div>
    </div>
  );
};

export default Navbar;
