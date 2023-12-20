import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useFiles } from "../hooks/useFiles";
import { useParams } from "react-router";
import { RiFolderUploadFill } from "react-icons/ri";

function FileUpload() {
  const [file, setFile] = useState(null);
  const { upload, isUploadLoading, addFileToBlockchain } = useFiles();
  const { caseId } = useParams();
  const handleChange = (file) => {
    console.log(file);
    setFile(file);
  };

  async function uploadFile() {
    try {
      const [ipfsURI] = await upload({ data: [file] });
      await addFileToBlockchain(ipfsURI, caseId);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="bg-slate-950 min-h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h3 className="text-white font-bold text-4xl mb-4">
          Add files <span className="text-blue-600">here</span>
        </h3>
        <div className="flex flex-row">
          <FileUploader handleChange={handleChange} name="file">
            <div className="flex justify-center p-10 h-96 w-60 items-center bg-gray-100">
              <RiFolderUploadFill className="w-20 h-20 text-gray-700" />
            </div>
          </FileUploader>
          <div className="flex flex-col ml-4">
              <p className="text-white font-bold mb-2">
                Add <span className="text-green-500">description</span> below
              </p>
              <textarea className="bg-black text-white h-72 w-80 p-4 rounded-xl border-2 border-white" placeholder="add metadata here"/>
              <p className="text-white">{file?.name}</p>
        <div className=" bg-gradient-to-r from-blue-500 via-blue-800 to-purple-600 mt-4 p-4 flex text-white justify-center items-center rounded-xl">
          <button onClick={() => uploadFile()}>Upload Files</button>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FileUpload;
