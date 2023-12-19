import { createContext, useContext, useEffect, useState } from "react";
import { thirdWebConfig } from "./data";
import { getAcessor } from "./utils/getAccessor";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate, useNavigation } from "react-router-dom";

const Web3Context = createContext();
export const useWeb3Context = () => useContext(Web3Context);
export default function Web3ContextProvider({ children }) {
  const nav = useNavigate();
  const [accessor] = useState(() => getAcessor());
  const address = useAddress();
  useEffect(() => {
    if (address) nav("/select");
  }, [address]);

  return <Web3Context.Provider>{children}</Web3Context.Provider>;
}
