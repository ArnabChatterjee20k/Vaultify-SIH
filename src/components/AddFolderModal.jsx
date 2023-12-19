import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import useCourtCases from "../hooks/useCourtCases";

const AddFolderModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-transparent w-full flex"
      >
        Create Folder
      </button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState("idle"); // idle,loading
  const { getCourtCases, openCourtCases } = useCourtCases();
  async function addFolder() {
    try {
      setIsLoading("loading");
      const id = text;
      await openCourtCases(id, id);
    } catch (error) {
      alert("Some Error Occured");
    } finally {
      setIsOpen(false);
      setIsLoading("idle");
    }
  }
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                id="first_name"
                className="mb-5 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full p-2.5 dark:bg-white   dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="enter the case id"
                required
              />

              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  {isLoading === "loading" ? "Loading..." : "Nah, go back"}
                </button>
                <button
                  onClick={addFolder}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  {isLoading === "loading" ? "Loading..." : "Add"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddFolderModal;
