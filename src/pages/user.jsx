import { useEffect } from "react";
import { RiRefreshLine, RiUpload2Fill } from "react-icons/ri";
import { FaFolder } from "react-icons/fa";
import VaultifyIcon from "../assets/vaultify.png";
import MetaMaskIcon from "../assets/metamask-icon.svg";
import { useWeb3Context } from "../Web3ContextProvider";
import AddFolderModal from "../components/AddFolderModal";
import useCourtCases from "../hooks/useCourtCases";
import { Link} from "react-router-dom";


const User = () => {
  const { accessor } = useWeb3Context();
  const { getCourtCases, courtCases } = useCourtCases();
  useEffect(() => {
    (async () => {
      await getCourtCases();
    })();
  }, []);

  return (
    <div
      id="/lawyer"
      className="min-h-screen flex items-start justify-start bg-gradient-to-tr from-blue-950 via-pink-700 to-blue-950 text-white overflow-hidden"
    >
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
                  <h1 className="font-extrabold mb-4 text-left text-7xl ml-4 md:ml-0">
                    <span className="text-yellow-300">Hey</span> @
                    {accessor.toUpperCase()}
                    <span className="text-yellow-300">,</span>
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
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="flex flex-row">
                <button className="p-3 text-xl w-60 lg:w-80 mt-4 lg:mt-10 flex items-center mr-2 bg-gradient-to-r from-pink-500 to-purple-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none">
                  <AddFolderModal />
                  <RiUpload2Fill className="ml-2" />
                </button>
                <button className="w-20 text-2xl mt-4 lg:mt-10 flex items-center  bg-gradient-to-r from-pink-500 to-purple-800 hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-900 rounded-2xl justify-center focus:outline-none">
                  <RiRefreshLine />
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-full p-8 bg-white rounded-3xl shadow-lg min-h-[500px] flex flex-col gap-3"
            style={{ background: "rgba(255, 255, 255, 0.1)" }}
          >
            {courtCases.map(([id, name]) => (
              <Link to={`${accessor}/${id}`} className="text-white text-2xl hover:underline">
                case-{name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
