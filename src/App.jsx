import React from "react";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40"></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
