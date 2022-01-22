import React from "react";
import { Route, Routes } from "react-router-dom";
import Launches from "./Component/launches/Launches";
import LaunchView from "./launchView/LaunchView";

function CustomRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Launches />} />
        <Route path="/launch/:flight_number" element={<LaunchView />} />
      </Routes>
    </div>
  );
}

export default CustomRouter;
