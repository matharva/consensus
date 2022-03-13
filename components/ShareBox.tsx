import React from "react";

// Assets
import Tw from "../assets/icon-colour-icon-profile-twitter.svg";
import Fb from "../assets/icon-colour-icon-profile-facebook.svg";
import Wa from "../assets/icon-whatsapp.svg";
import Lk from "../assets/icon-link.svg";
import Qr from "../assets/icon-qr-code.svg";
import Image from "next/image";
import Link from "next/link";

interface Props {
  totalVotes: number;
  userChoice: string;
  pollId: string;
}
const ShareBox = ({ totalVotes, userChoice, pollId }: any) => {
  return (
    <>
      <div className="h-38 fixed bottom-0 w-full bg-white flex flex-col md:hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex flex-col justify-center items-start mx-6 mt-4">
            <div className="text-xs font-bold text-gray-400">Votes</div>
            <div className="text-2xl font-bold">{totalVotes}</div>
          </div>
          <div className="m-4 flex items-baseline justify-evenly gap-6 translate-y-3 -translate-x-3">
            <Image src={Tw} />
            <Image src={Fb} />
            <Image src={Wa} />
            <Image src={Lk} />
            <Image src={Qr} />
          </div>
        </div>
        {userChoice ? (
          <div className="">
            <div className="text-sm p-4 rounded-md bg-blue-50 m-4 mt-2">
              You voted <span className="font-bold ">{userChoice}</span> on this
              poll
            </div>
          </div>
        ) : (
          <Link href={`/poll/${pollId}`}>
            <div className="bg-green-400 p-4 text-center rounded font-bold text-white m-4 mt-0 text-lg md:mx-auto cursor-pointer">
              Submit your vote
            </div>
          </Link>
        )}
      </div>
      <div className="mt-12 hide-mobile split-2">
        <div className=" p-6 rounded bg-white shadow-lg">
          <div className="flex flex-col ">
            <div className="text-sm font-bold text-gray-400 ">Total Votes</div>
            <div className="text-4xl font-bold py-4">{totalVotes}</div>
          </div>

          <hr className="h-0.5 bg-gray-100 mt-4" />
          <div className="flex flex-col">
            <div className="text-gray-400 font-bold mt-8">Share</div>
            <div className="flex flex-col gap-3">
              <div className="flex m-2">
                <Image src={Tw} />
                <div className="text-blue-400 ml-4 font-bold">
                  Share on Twitter
                </div>
              </div>
              <div className="flex m-1">
                <Image src={Fb} />
                <div className="text-blue-400 ml-4 font-bold">
                  Share on Facebook
                </div>
              </div>
              <div className="flex m-1">
                <Image src={Wa} />
                <div className="text-blue-400 ml-4 font-bold">
                  Share on Whatsapp
                </div>
              </div>
              <div className="flex m-1">
                <Image src={Lk} />
                <div className="text-blue-400 ml-4 font-bold">Share Link</div>
              </div>
              <div className="flex m-1">
                <Image src={Qr} />
                <div className="text-blue-400 ml-4 font-bold">
                  Share QR Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareBox;
