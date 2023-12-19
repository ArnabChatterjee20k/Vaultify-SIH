import React, { useState } from "react";
import Share from "./pages/share";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Lawyer from "./pages/lawyer";
import Judge from "./pages/judge";
import Client from "./pages/client";
import Select from "./pages/select";
import { getAcessor } from "./utils/getAccessor";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Web3ContextProvider from "./Web3ContextProvider";
import { useAddress } from "@thirdweb-dev/react";
function App() {
  const [accessor] = useState(() => getAcessor());
  const address = useAddress()
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
        <Web3ContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/share" element={<Share />} />
            <Route path="/lawyer" element={<Lawyer />} />
            <Route path="/client" element={<Client />} />
            <Route path="/judge" element={<Judge />} />
            {address && <Route path="/select" element={accessor?<Navigate to="share"/>:<Select />} />}
          </Routes>
        </Web3ContextProvider>
    </>
  );
}

export default App;
