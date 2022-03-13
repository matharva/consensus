import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Poll } from "../../types/types";

const LinkPage = () => {
  const router = useRouter();
  const { id: pollId } = router.query;
  const [pbLink, setPbLink] = useState("");
  const [adLink, setAdLink] = useState("");

  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      // Make a request for a user with a given ID
      const response = await axios.get(`http://localhost:5000/data/${pollId}`);
      console.log("Data: ", response.data);
      const { publicLink, adminLink } = response["data"];
      // console.log("Pb, ad: ", publicLink, adminLink);
      setPbLink(publicLink);
      setAdLink(adminLink);
    };
    if (pollId) fetchData();
  }, [pollId]);
  return (
    <div>
      <Navbar />
      <div className="h-full max-w-xl md:mx-auto">
        <div className="p-4 border-1 rounded-md shadow-md m-8 border-1 border-gray-100">
          <div className="mt-4">The link to your poll is: </div>
          <input
            type="text"
            value={pbLink}
            className="p-2 w-full rounded my-2 bg-gray-100 border-2"
          />

          <hr className="h-0.25 bg-gray-100 my-8" />
          <div className="mt-4">The admin link to manage your poll is: </div>
          <div className="text-sm font-bold text-orange-600 py-2">
            Don't share this link with your participants
          </div>
          <input
            type="text"
            value={adLink}
            className="p-2 w-full rounded my-2 bg-gray-100 border-2"
          />

          <div className="flex items-center justify-evenly p-3 text-center ">
            {/* <Link href={pbLink}> */}
            <a target="_blank" href={pbLink} rel="noopener noreferrer">
              <div className="text-blue-500 font-bold border-r-2 flex-1 pr-2">
                Visit your poll
              </div>
            </a>
            {/* </Link> */}
            {/* <hr className="h-0.25 bg-gray-100 my-8" /> */}
            {/* <Link href={adLink}> */}
            <a target="_blank" href={adLink} rel="noopener noreferrer">
              <div className="text-blue-500 font-bold flex-1">Visit admin</div>
            </a>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LinkPage;
