import React from "react";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

import Tw from "../../../assets/icon-colour-icon-profile-twitter.svg";
import Fb from "../../../assets/icon-colour-icon-profile-facebook.svg";
import Wa from "../../../assets/icon-whatsapp.svg";
import Lk from "../../../assets/icon-link.svg";
import Qr from "../../../assets/icon-qr-code.svg";
import Image from "next/image";

import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const AdminPage = () => {
  return (
    <div>
      <Navbar />{" "}
      <div className="flex  max-w-4xl mx-auto">
        <div className="p-5 max-w-xl md:mx-auto split-1">
          {/* Manage poll option */}
          <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
            <div className="split-1">
              <div className="text-2xl font-bold">Manage your Poll</div>
              <div className="text-gray-400">
                You can only edit your poll if it has no votes
              </div>
            </div>
            <div className="flex justify-evenly items-center my-6 split-2">
              <AiOutlineEdit className="text-2xl" />
              <MdDelete className="text-2xl" />
            </div>
          </div>
          {/* Manage poll option */}
          <div className="text-3xl font-bold my-8 mb-10">
            What is your favourite movie?
          </div>

          {/* Options */}
          <div
            className="flex items-center justify-start border-2 p-4 rounded-md border-green-400 my-6 mb-10 shadow-lg shadow-green-200"
            style={{ borderWidth: "3px" }}
          >
            <div className="flex items-start justify-start flex-col w-full px-4 relative">
              <div className="text-2xl font-bold">option1</div>
              <div className="w-full bg-gray-200 h-2 mt-4 mb-3 rounded">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="text-sm font-bold">1 vote</div>
              <div
                className="absolute flex items-center justify-center bg-white rounded-full shadow-lg"
                style={{ top: "-40px", right: "-30px" }}
              >
                <div className="p-2 px-5 font-bold">100%</div>
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-start border-2 p-4 rounded-md border-green-400 my-6 mb-10 shadow-lg shadow-green-200"
            style={{ borderWidth: "3px" }}
          >
            <div className="flex items-start justify-start flex-col w-full px-4 relative">
              <div className="text-2xl font-bold">option1</div>
              <div className="w-full bg-gray-200 h-2 mt-4 mb-3 rounded">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="text-sm font-bold">1 vote</div>
              <div
                className="absolute flex items-center justify-center bg-white rounded-full shadow-lg"
                style={{ top: "-40px", right: "-30px" }}
              >
                <div className="p-2 px-5 font-bold">100%</div>
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-start border-2 p-4 rounded-md border-green-400 my-6 mb-10 shadow-lg shadow-green-200"
            style={{ borderWidth: "3px" }}
          >
            <div className="flex items-start justify-start flex-col w-full px-4 relative">
              <div className="text-2xl font-bold">option1</div>
              <div className="w-full bg-gray-200 h-2 mt-4 mb-3 rounded">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <div className="text-sm font-bold">1 vote</div>
              <div
                className="absolute flex items-center justify-center bg-white rounded-full shadow-lg"
                style={{ top: "-40px", right: "-30px" }}
              >
                <div className="p-2 px-5 font-bold">100%</div>
              </div>
            </div>
          </div>
          <div className="h-24"></div>
        </div>
        <div className="h-38 fixed bottom-0 w-full bg-white flex flex-col md:hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex flex-col justify-center items-start mx-6 mt-4">
              <div className="text-xs font-bold text-gray-400">Votes</div>
              <div className="text-2xl font-bold">1</div>
            </div>
            <div className="m-4 flex items-baseline justify-evenly gap-6 translate-y-3 -translate-x-3">
              <Image src={Tw} />
              <Image src={Fb} />
              <Image src={Wa} />
              <Image src={Lk} />
              <Image src={Qr} />
            </div>
          </div>
          <div className="">
            <div className="text-sm p-4 rounded-md bg-blue-50 m-4 mt-2">
              You voted <span className="font-bold ">option1</span> on this poll
            </div>
          </div>
        </div>
        <div className="mt-12 hide-mobile split-2">
          <div className=" p-6 rounded bg-white shadow-lg">
            <div className="flex flex-col ">
              <div className="text-sm font-bold text-gray-400 ">
                Total Votes
              </div>
              <div className="text-4xl font-bold py-4">1</div>
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
      </div>{" "}
      <Footer />
    </div>
  );
};

export default AdminPage;
