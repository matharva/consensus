import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useClipboard } from "@chakra-ui/react";
import { fetchData } from "../../helpers";
import { IoIosWarning } from "react-icons/io";

const LinkPage = () => {
  const router = useRouter();
  const { id: pollId } = router.query;

  // State
  const [pbLink, setPbLink] = useState("");
  const [adLink, setAdLink] = useState("");

  // Clipboard
  const { hasCopied: hasCopiedPb, onCopy: onCopyPb } = useClipboard(pbLink);
  const { hasCopied: hasCopiedAd, onCopy: onCopyAd } = useClipboard(adLink);

  // Side Effects
  useEffect(() => {
    console.log(pollId);
    async function updateData() {
      if (pollId) {
        const currentPoll = await fetchData(pollId);
        console.log(currentPoll);
        const { publicLink, adminLink }: any = currentPoll;
        setPbLink(publicLink);
        setAdLink(adminLink);
      }
    }
    updateData();
  }, [pollId]);
  return (
    <div className="max-w-xl md:mx-auto">
      <div className="p-4 border-1 rounded-md shadow-md m-8 mt-24 border-1 border-gray-100">
        <div className="text-4xl text-center font-bold py-4">Share Links</div>
        <div className="mt-4">The link to your poll is: </div>
        <input
          type="text"
          onClick={onCopyPb}
          value={hasCopiedPb ? "Copied to Clipboard" : pbLink}
          className="p-2 w-full rounded my-2 bg-gray-100 border-2 text-center cursor-pointer hover:bg-gray-200 outline-none"
        />
        <hr className="h-0.25 bg-gray-100 my-8" />
        <div className="mt-4">The admin link to manage your poll is: </div>

        <div className="flex text-orange-600 py-2 items-center">
          <IoIosWarning />
          <div className="text-sm font-bold ml-2">
            Do not share this link with your participants
          </div>
        </div>
        <input
          type="text"
          onClick={onCopyAd}
          value={hasCopiedAd ? "Copied to Clipboard" : adLink}
          className="p-2 w-full rounded my-2 bg-gray-100 border-2 text-center cursor-pointer hover:bg-gray-200 outline-none"
        />
        <div className="flex items-center justify-evenly p-3 text-center ">
          <div className="text-blue-500 font-bold border-r-2 flex-1 pr-2">
            <a target="_blank" href={pbLink} rel="noopener noreferrer">
              Visit your poll
            </a>
          </div>

          <div className="text-blue-500 font-bold flex-1">
            <a target="_blank" href={adLink} rel="noopener noreferrer">
              Visit admin
            </a>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
