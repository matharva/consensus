import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center ">
      <div className="text-4xl mx-2 md:text-6xl font-bold">
        Create instant, real-time <br />
        polls for free
      </div>
      <Link href="/new-poll">
        <button className="bg-green-400 p-4 m-4 mt-8 rounded-md text-white text-xl font-medium">
          Create your Poll
        </button>
      </Link>
    </div>
  );
};

export default Home;
