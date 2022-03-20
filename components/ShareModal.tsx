import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useClipboard,
} from "@chakra-ui/react";
import { APP_URL } from "../helpers";

const ShareLinkComp = ({ pollData }: any) => {
  // State
  const [pollLink, setPollLink] = useState("");
  const [resultLink, setResultLink] = useState("");

  // Clipboard
  const { hasCopied: hasCopiedPollLink, onCopy: onCopyPollLink } =
    useClipboard(pollLink);
  const { hasCopied: hasCopiedResultLink, onCopy: onCopyResultLink } =
    useClipboard(resultLink);

  useEffect(() => {
    const { id } = pollData;
    console.log("id: ", id);
    setPollLink(`${APP_URL}/poll/${id}`);
    setResultLink(`${APP_URL}/poll/result/${id}`);
  }, [pollData]);

  return (
    // <div className="max-w-xl md:mx-auto">
    <div className="p-4 border-1 rounded-md m-2 md:m-8 border-1 border-gray-100">
      <div className="text-4xl text-center font-bold py-4">Share Links</div>
      <ModalCloseButton />
      <div className="mt-4">
        The link to your <span className="font-bold">poll</span> is:
      </div>
      <input
        type="text"
        onClick={onCopyPollLink}
        style={{ caretColor: "transparent" }}
        defaultValue={hasCopiedPollLink ? "Copied to Clipboard" : pollLink}
        className="p-2 w-full rounded my-2 bg-gray-100 border-2 text-center cursor-pointer hover:bg-gray-200 outline-none"
      />
      <hr className="h-0.25 bg-gray-100 my-8" />
      <div className="mt-4">
        The link to the <span className="font-bold">result</span> is:
      </div>

      <input
        type="text"
        onClick={onCopyResultLink}
        style={{ caretColor: "transparent" }}
        defaultValue={hasCopiedResultLink ? "Copied to Clipboard" : resultLink}
        className="p-2 w-full rounded my-2 bg-gray-100 border-2 text-center cursor-pointer hover:bg-gray-200 outline-none"
      />
    </div>
    // </div>
  );
};

const ShareModal = ({ isOpen, onClose, pollData }: any) => {
  function renderModalContent() {
    return (
      <>
        <ShareLinkComp pollData={pollData} />
      </>
    );
    // return (
    //   <>
    //     <ModalHeader>Modal Title</ModalHeader>
    //     <ModalCloseButton />
    //     <ModalBody>
    //       {/* <Lorem count={2} /> */}
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    //       voluptatum aliquid rerum debitis animi incidunt numquam quasi culpa
    //       explicabo accusamus.
    //     </ModalBody>

    //     <ModalFooter>
    //       <Button colorScheme="blue" mr={3} onClick={onClose}>
    //         Close
    //       </Button>
    //       <Button variant="ghost">Secondary Action</Button>
    //     </ModalFooter>
    //   </>
    // );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      //   styleConfig={{ margin: "1rem" }}
    >
      <ModalOverlay />
      <ModalContent style={{ margin: "0 1rem" }}>
        {renderModalContent()}
      </ModalContent>
    </Modal>
  );
};

export default ShareModal;
