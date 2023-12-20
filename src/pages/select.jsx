import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import VaultifyIcon from "../assets/vaultify.png";
import JudgeIcon from "../assets/judge.png";
import LawyerIcon from "../assets/lawyer.png";
import ClientIcon from "../assets/client.png";
import CheckboxAnimation from "../assets/checkmark.json";
import { Link } from "react-router-dom";
import { setAcessor } from "../utils/setAccessor";
import { goToSpecificAccessor } from "../utils/goToSpecificAccessor";
import {useWeb3Context} from "../Web3ContextProvider"
const Select = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [status,setStatus] = useState()
  const {contract} = useWeb3Context()
  const handleButtonClick = (role) => {
    setSelectedRole(role.toLowerCase());
  };

  const handleContinueClick = async(authority) => {
    setAcessor(selectedRole.toLowerCase());
    await contract.registerUser("testUser",authority.toLowerCase());
    // Check the selected role and redirect accordingly
    navigate("/");
  };

  const renderAnimation = (role) => {
    if (selectedRole === role.toLowerCase()) {
      return (
        <div className="absolute top-10 left-0 w-full h-full flex items-center justify-center">
          <Lottie animationData={CheckboxAnimation} loop={false} />
        </div>
      );
    }
    return null;
  };

  return (
    <div
      id="/select"
      className="min-h-screen flex items-start justify-start bg-gradient-to-tr from-[#0E0A2A] via-[#12196B] to-[#0E0A2A] text-white overflow-hidden"
    >
      <div className="w-full p-8">
        {/* Logo */}
        <div className="mb-8 ml-8">
          <img src={VaultifyIcon} alt="Logo" className="w-26 h-16" />
        </div>

        <div className="lg:mx-10">
          <div className="flex flex-col lg:flex-col mb-10">
            <div className="flex-grow md:mr-4">
              <h1 className="font-extrabold mb-4 text-left text-7xl ml-4 md:ml-0">
                <span className="text-yellow-300">Select</span> your role
                <span className="text-yellow-300">,</span>
              </h1>
            </div>
          </div>

          {/* Previously Shared with Section */}
          <div className="mt-6">
            {/* Manage Accessibility and Search */}
            <div
              className="w-full p-8 bg-white flex flex-col items-center lg:flex-row md:justify-evenly rounded-3xl shadow-lg min-h-[500px]"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <button
                onClick={() => handleButtonClick("Lawyer")}
                className="relative"
              >
                <span className="text-4xl">
                  I'm a<br />{" "}
                  <span className="text-yellow-300 font-bold">Lawyer</span>
                </span>
                {renderAnimation("Lawyer")}
                <img src={LawyerIcon} alt="Logo" className="w-60 h-60" />
              </button>
              <button
                onClick={() => handleButtonClick("Client")}
                className="relative"
              >
                <span className="text-4xl">
                  I'm a<br />{" "}
                  <span className="text-yellow-300 font-bold">Client</span>
                </span>
                {renderAnimation("Client")}
                <img src={ClientIcon} alt="Logo" className="w-60 h-60" />
              </button>
              <button
                onClick={() => handleButtonClick("Judge")}
                className="relative"
              >
                <span className="text-4xl">
                  I'm a<br />{" "}
                  <span className="text-yellow-300 font-bold">Judge</span>
                </span>
                {renderAnimation("Judge")}
                <img src={JudgeIcon} alt="Logo" className="w-60 h-60" />
              </button>
            </div>

            {selectedRole && (
              <div className="mt-4 text-center">
                <button
                  className="text-xl bg-blue-500 text-white px-4 py-2 rounded mt-4"
                  onClick={()=>handleContinueClick(selectedRole)}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
