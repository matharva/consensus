import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const LinkPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full max-w-xl md:mx-auto">
        <div className="p-4 border-1 rounded-md shadow-md m-8 border-1 border-gray-100">
          <div className="mt-4">The link to your poll is: </div>
          <input
            type="text"
            className="p-2 w-full rounded my-2 bg-gray-100 border-2"
          />

          <hr className="h-0.25 bg-gray-100 my-8" />
          <div className="mt-4">The admin link to manage your poll is: </div>
          <div className="text-sm font-bold text-orange-600 py-2">
            Don't share this link with your participants
          </div>
          <input
            type="text"
            className="p-2 w-full rounded my-2 bg-gray-100 border-2"
          />

          <div className="flex items-center justify-evenly p-3 text-center ">
            <div className="text-blue-500 font-bold border-r-2 flex-1 pr-2">
              Visit your poll
            </div>
            {/* <hr className="h-0.25 bg-gray-100 my-8" /> */}
            <div className="text-blue-500 font-bold flex-1">Visit admin</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LinkPage;
