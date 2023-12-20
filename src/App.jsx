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
import Web3ContextProvider, { useWeb3Context } from "./Web3ContextProvider";
import { useAddress } from "@thirdweb-dev/react";
import User from "./pages/user";
import FileUpload from "./pages/FileUpload";

function App() {
  const address = useAddress();
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>
      <Web3ContextProvider>
        {address ? <AuthenticatedRoutes /> : <NonAuthenticatedRoutes />}
      </Web3ContextProvider>
    </>
  );
}

function AuthenticatedRoutes() {
  const { accessor } = useWeb3Context();
  return (
    // now the home route will be the select
    <Routes>
      <Route
        path="/"
        element={accessor ? <User /> : <Select />}
      />
      <Route path="/share" element={<Share />} />
      {/* on role basis of the accessor the user is forwarded to /lawyer,/client,/judge */}
      <Route path="/lawyer/:caseId" element={<Lawyer />} />
      <Route path="/client/:caseId" element={<Client />} />
      <Route path="/judge/:caseId" element={<Judge />} />
      <Route path="/upload" element={<FileUpload />} />
    </Routes>
  );
}

function NonAuthenticatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
