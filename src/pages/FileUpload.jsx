import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useFiles } from "../hooks/useFiles";
import { useParams } from "react-router";

function FileUpload() {
  const [file, setFile] = useState(null);
  const { upload, isUploadLoading , addFileToBlockchain} = useFiles();
  const {caseId} = useParams()
  const handleChange = (file) => {
    console.log(file)
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
    <div>
      <FileUploader handleChange={handleChange} name="file" />
      {file?.name}
      <div>
        <button onClick={() => uploadFile()}>Upload</button>
      </div>
    </div>
  );
}

export default FileUpload;
