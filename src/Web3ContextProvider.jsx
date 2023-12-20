import { createContext, useContext, useEffect, useState } from "react";
import { abi, contractAddress } from "./data";
import { getAcessor } from "./utils/getAccessor";
import { useAddress ,useSigner} from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import { Contract } from "ethers"
// import {abi,contractAddress} from "./data"
const Web3Context = createContext();
export const useWeb3Context = () => useContext(Web3Context);
export default function Web3ContextProvider({ children }) {
  const nav = useNavigate();
  const signer = useSigner()
  const [accessor] = useState(() => getAcessor());
  const contract = new Contract(contractAddress,abi,signer)
  const address = useAddress();

  return <Web3Context.Provider value={{accessor,contract}}>{children}</Web3Context.Provider>;
}
