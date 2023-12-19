import React from "react";
import Blocks from "../assets/blocks.png";
import MetaMaskIcon from "../assets/metamask-icon.svg";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import VaultifyIcon from "../assets/vaultify.png";
import { Link, useNavigate } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";

function Home() {
  const button1Style = {
    background: "linear-gradient(to right, yellow, green 80%)",
  };

  const button2Style = {
    background: "linear-gradient(to right, orange, purple)",
  };

  return (
    <div className="flex lg:flex-row md:flex-col h-screen overflow-scroll lg:overflow-hidden bg-gradient-to-br from-black via-purple-900 to-yellow-600">
      <div className="w-full lg:w-1/2 p-10 mb-10">
        <div className="mb-8">
          <img src={VaultifyIcon} alt="Logo" className="w-30 h-20" />
        </div>
        <div className="text-center lg:mt-40">
          <h1 className="text-7xl mb-2 font-extrabold text-white">
            <span className="text-yellow-500">Your</span> Legal Legacy
          </h1>
        </div>
        <div className="flex items-center">
          <p className="mt-4 text-white mb-10 md:ml-8 mx-10 text-3xl font-normal">
            Welcome to the <span className="text-yellow-500">future</span> of{" "}
            <span className="underline underline-offset-8 decoration-yellow-500 decoration-4">
              storage
            </span>{" "}
            <br />
            <span className="text-yellow-500"> redefined on </span>
            <span className="underline underline-offset-8 decoration-yellow-500 decoration-4">
              Blockchain
            </span>
          </p>
        </div>

        <div className="flex flex-col space-y-4 ml-6">
          <Link
            to={"/tutorial"}
            style={button1Style}
            className="text-white px-4 py-2 lg:w-96 w-72 rounded-xl"
          >
            <div className="flex flex-row justify-center">
              <span className="px-4 font-bold">Tutorial</span>
              <BsFillPatchQuestionFill className="w-7 h-7 text-yellow-400" />
            </div>
          </Link>
          {/* <Link to={'/select'} style={button2Style} className="text-white px-4 py-2 lg:w-96 w-72 rounded-xl">
            <div className="flex flex-row justify-center">
              <span className="px-4 font-bold">Connect to</span>
              <img
                src={MetaMaskIcon}
                alt="Main Illustration"
                className="w-7 h-7"
              />
            </div>
          </Link> */}
          <div className="lg:w-96 w-72">
            <ConnectWallet
              style={{ ...button2Style, width: "100%", color: "white" }}
            />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 relative hidden lg:block">
        <div className="bg-white right-0 h-96 w-96 blur-3xl z-0 absolute" />
        <img
          src={Blocks}
          alt="Main Illustration"
          className="w-full h-full object-cover z-1 relative"
        />
      </div>
    </div>
  );
}

export default Home;
