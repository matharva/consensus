import React from "react";

// Assets
import Tw from "../assets/icon-colour-icon-profile-twitter.svg";
import Fb from "../assets/icon-colour-icon-profile-facebook.svg";
import Wa from "../assets/icon-whatsapp.svg";
import Lk from "../assets/icon-link.svg";
import Qr from "../assets/icon-qr-code.svg";
import Image from "next/image";
import Link from "next/link";
import { APP_URL } from "../helpers";

interface Props {
  totalVotes: number;
  userChoice: string;
  pollId: string;
}
const ShareBox = ({
  totalVotes,
  userChoice,
  pollId,
  onOpen,
  setShareType,
}: any) => {
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
            <Image
              src={Lk}
              onClick={() => {
                onOpen();
                setShareType("link");
              }}
            />
            <Image
              src={Qr}
              onClick={() => {
                onOpen();
                setShareType("qr");
              }}
            />
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
        {userChoice ? (
          <div className="">
            <div className="text-sm p-4 rounded-md w-full bg-blue-50  my-2">
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
        <div className=" p-6 rounded bg-white shadow-lg">
          <div className="flex flex-col ">
            <div className="text-sm font-bold text-gray-400 ">Total Votes</div>
            <div className="text-4xl font-bold py-4">{totalVotes}</div>
          </div>

          <hr className="h-0.5 mt-4" />
          <div className="flex flex-col">
            <div className="text-gray-400 font-bold mt-8">Share</div>
            <div className="flex flex-col gap-3">
              {/* <div className="flex m-2 cursor-pointer" onClick={onOpen}>
                <Image src={Tw} />
                <div className="text-blue-400 ml-4 font-bold">
                  Share on Twitter
                </div>
              </div>
              <div className="flex m-1 cursor-pointer" onClick={onOpen}>
                <Image src={Fb} />
                <div className="text-blue-800 ml-4 font-bold">
                  Share on Facebook
                </div>
              </div> */}
              <div
                className="flex m-1 mt-3 cursor-pointer"
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/send?text=Vote for this poll! \n" +
                    APP_URL +
                    "/poll/result/" +
                    pollId)
                }
              >
                <Image src={Wa} />
                <div className="text-green-400 ml-4 font-bold">
                  Share on Whatsapp
                </div>
              </div>
              <div
                className="flex m-1 cursor-pointer"
                onClick={() => {
                  onOpen();
                  setShareType("link");
                }}
              >
                <Image src={Lk} />
                <div className="text-orange-400 ml-4 font-bold">Share Link</div>
              </div>
              <div
                className="flex m-1 cursor-pointer"
                onClick={() => {
                  setShareType("qr");
                  onOpen();
                }}
              >
                <Image src={Qr} />
                <div className="text-purple-400 ml-4 font-bold">
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
