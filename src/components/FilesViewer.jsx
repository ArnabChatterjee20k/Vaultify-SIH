import { useParams } from "react-router";
import { useFiles } from "../hooks/useFiles";
import { useEffect } from "react";
import { useStorage } from "@thirdweb-dev/react-core";
import { FaFileAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { BsFiletypeXlsx } from "react-icons/bs";

export default function FilesViewer() {
  const { caseId } = useParams();
  const { getFiles, files } = useFiles();
  const storage = useStorage();
  useEffect(() => {
    getFiles(String.toString(caseId));
  }, []);
  console.log(files);
  function getFileExt(ipfs) {
    const data = ipfs?.split(".");
    const ext = data[data.length - 1];
    return ext;
  }

  function renderFile(ipfs) {
    const ext = getFileExt(ipfs);
    switch (ext) {
      case "pdf":
        return <FaFilePdf color="black" className="text-[10rem]" />;
        break;

      case "docx":
        return <FaFileAlt color="black" className="text-[10rem]" />;
        break;

      case "xlsx":
        return <BsFiletypeXlsx color="black" className="text-[10rem]" />;
        break;

      default:
        return (
          <img
            src={storage.resolveScheme(ipfs)}
            className="w-full object-cover"
          />
        );
        break;
    }
  }
  return (
    <div className="flex flex-wrap gap-5">
      {files.map(([ipfs]) => (
        <div className="bg-white w-80 cursor-pointer flex justify-center items-center">
          <a target="_blank" href={storage.resolveScheme(ipfs)}>
            {renderFile(ipfs)}
          </a>
        </div>
      ))}
    </div>
  );
}
