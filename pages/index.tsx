import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full text-center ">
        <div className="text-4xl mx-2 md:text-6xl font-bold">
          Create instant, real-time <br />
          polls for free
        </div>
        <button className="bg-green-400 p-4 m-4 mt-8 rounded-md text-white text-xl font-medium">
          Create your Poll
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
