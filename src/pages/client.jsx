import React from "react";
import {
  RiSearch2Line,
  RiRefreshLine,
  RiUpload2Fill,
  RiEyeFill
} from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";
import VaultifyIcon from '../assets/vaultify.png'
import MetaMaskIcon from '../assets/metamask-icon.svg'
import { useNavigate } from "react-router";
import FileViewer from "../components/FilesViewer"

const Client = () => {
  const nav = useNavigate()
  return (
    <div id="/client" className="min-h-screen flex items-start justify-start bg-gradient-to-tr from-purple-950 via-green-950 to-blue-950 text-white overflow-hidden">
      <div className="w-full p-8">
        {/* Logo */}
        <div className="mb-8 ml-8">
          <img src={VaultifyIcon} alt="Logo" className="w-26 h-16" />
        </div>

        <div className="lg:mx-10">
          <div className="flex flex-col lg:flex-col mb-20">
            <div className="flex-grow md:mr-4">
              <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-col">
                      <h1 className="font-extrabold mb-4 text-left text-7xl ml-4 md:ml-0"><span className="text-yellow-300">Hey</span> @Client<span className="text-yellow-300">,👥</span></h1>
                      <div className="flex flex-row ml-4"><img src={MetaMaskIcon} alt="metamask" className="w-6 h-6 mr-2" /><h2>0xFabCdeFGIjlMnpQStUvWx2386wbjA</h2></div>
                  </div>
                  <div className="lg:absolute right-16 mr-1 mt-10">
                      <button onClick={()=>nav("/upload")}
                              className="p-3 text-xl w-80 mt-4 lg:mt-10 flex items-center mr-2 bg-gradient-to-r from-pink-500 to-purple-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none"
                            >
                              Share with LAWYER
                              <FaShareAlt className="ml-2" />
                            </button>
                  </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-row">
                    <button
                      onClick={()=>nav("/upload")}
                      className="p-3 text-xl w-60 lg:w-80 mt-4 lg:mt-10 flex items-center mr-2 bg-gradient-to-r from-blue-500 to-purple-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none"
                    >
                      Upload Files
                      <RiUpload2Fill className="ml-2" />
                    </button>
                    <button
                      className="w-20 text-2xl mt-4 lg:mt-10 flex items-center  bg-gradient-to-r from-pink-500 to-purple-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none"
                    >
                      <RiRefreshLine />
                    </button>
                </div>
                    <div className="flex">
                        <button
                          className="p-3 text-xl w-80 mt-4 lg:mt-10 flex items-center mr-2 bg-gradient-to-r from-blue-500 to-green-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none"
                        >
                          Show Case ID
                          <RiEyeFill className="ml-2" />
                        </button>
                    </div>
            </div>
          </div>

          {/* Previously Shared with Section */}
          <div className="mt-6">
          <FileViewer/>
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

export default Client;
