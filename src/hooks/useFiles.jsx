import { useState } from "react";
import { useWeb3Context } from "../Web3ContextProvider";
import { useStorageUpload } from "@thirdweb-dev/react";
export function useFiles() {
  const { accessor, contract } = useWeb3Context();
  const [files, setFiles] = useState([]);
  const { mutateAsync: upload, isLoading: isUploadLoading } =
    useStorageUpload();

  async function getFiles(id) {
    const data = await contract.getFiles(id);
    setFiles(data)
  }

  async function addFileToBlockchain(ipfs, caseId) {
    await contract.uploadFile(ipfs, String.toString(caseId));
  }

  return { getFiles,files, upload, isUploadLoading, addFileToBlockchain };
}
