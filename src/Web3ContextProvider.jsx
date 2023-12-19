import { createContext, useContext, useEffect, useState } from "react";
import { thirdWebConfig } from "./data";
import { getAcessor } from "./utils/getAccessor";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";

const Web3Context = createContext();
export const useWeb3Context = () => useContext(Web3Context);
export default function Web3ContextProvider({ children }) {
  const nav = useNavigate();
  const [accessor] = useState(() => getAcessor());
  const address = useAddress();

  return <Web3Context.Provider value={{accessor}}>{children}</Web3Context.Provider>;
}
