import React from "react";
import {
  RiSearch2Line,
  RiRefreshLine,
  RiUpload2Fill,
  RiEyeFill,
} from "react-icons/ri";
import VaultifyIcon from "../assets/vaultify.png";
import MetaMaskIcon from "../assets/metamask-icon.svg";
import FilesViewer from "../components/FilesViewer";
import { useNavigate, useParams } from "react-router";

const Judge = () => {
  const nav = useNavigate()
  const {caseId} = useParams()
  return (
    <div
      id="/judge"
      className="min-h-screen flex items-start justify-start bg-gradient-to-tr from-[#0E0A2A] via-[#12196B] to-[#0E0A2A] text-white overflow-hidden"
    >
      <div className="w-full p-8">
        {/* Logo */}
        <div className="mb-8 ml-8">
          <img src={VaultifyIcon} alt="Logo" className="w-26 h-16" />
        </div>

        <div className="lg:mx-10">
          <div className="flex flex-col lg:flex-col mb-20">
            <div className="flex-grow md:mr-4">
              <h1 className="font-extrabold mb-4 text-left text-7xl ml-4 md:ml-0">
                <span className="text-yellow-300">Hey</span> @Judge
                <span className="text-yellow-300">,👨‍⚖️</span>
              </h1>
              <div className="flex flex-row ml-4">
                <img
                  src={MetaMaskIcon}
                  alt="metamask"
                  className="w-6 h-6 mr-2"
                />
                <h2>0xFabCdeFGIjlMnpQStUvWx2386wbjA</h2>
              </div>
            </div>
            <div className="flex flex-row">
              <button onClick={()=>nav(`/upload`)} className="p-5 text-xl w-60 mt-4 lg:mt-10 flex items-center mr-2 bg-gradient-to-r from-pink-500 to-purple-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none">
                Upload
                <RiUpload2Fill className="ml-2" />
              </button>
              <button className="w-20 text-2xl mt-4 lg:mt-10 flex items-center  bg-gradient-to-r from-pink-500 to-purple-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none">
                <RiRefreshLine />
              </button>
            </div>
          </div>

          {/* Previously Shared with Section */}
          <div className="mt-6">
            <div className="flex flex-col md:flex-row mt-4 mb-10">
              <input
                type="text"
                placeholder="Enter case ID"
                className="lg:w-[65rem] ml-8 text-center h-10 px-10 py-1 border rounded-xl border-none focus:outline-none bg-slate-300 text-black"
              />
              <button className="p-2 text-xl w-52 ml-4 flex items-center mr-2 bg-gradient-to-r from-pink-500 to-purple-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none">
                Show Files
                <RiEyeFill className="ml-2" />
              </button>
            </div>
            <FilesViewer />
            {/* Manage Accessibility and Search */}
            {/* <div className="w-full p-8 bg-white rounded-3xl shadow-lg min-h-[500px]" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
              <div className="flex flex-col md:flex-row items-center mb-2">
                  <input
                    type="text"
                    placeholder="Search your shared files here..."
                    className="lg:w-full h-10 px-10 py-1 border rounded-xl border-none focus:outline-none"
                    style={{ background: '#4C4966', color: '#fff' }}
                  />
                  <span className="absolute top-3 left-3">
                    <RiSearch2Line color="#fff" />
                  </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judge;
