import { useParams } from "react-router";
import { useFiles } from "../hooks/useFiles";
import { useEffect } from "react";
import { useStorage } from "@thirdweb-dev/react-core";
export default function FilesViewer() {
  const { caseId } = useParams();
  const { getFiles, files } = useFiles();
  const storage = useStorage();
  useEffect(() => {
    getFiles(String.toString(caseId));
  }, []);
  console.log(files);
  return (
    <div className="flex flex-wrap gap-5">
      {files.map(([ipfs]) => (
        <div className="bg-white w-80">
          <img
            src={storage.resolveScheme(ipfs)}
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
