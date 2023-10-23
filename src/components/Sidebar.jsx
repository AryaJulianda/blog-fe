import React from "react"

const Sidebar = () => {
  return (
    <div className="w-[20%]">
      <div className="w-[20%] fixed top-0 bottom-0 py-12 px-7 flex flex-col bg-white items-center gap-4 shadow-lg max-xl:py-10 max-xl:px-5 max-lg:py-8 max-lg:px-4">
        <div className="flex bg-[#C4C4C4] py-4 px-[84px] justify-center max-xl:py-3 max-xl:px-20 max-lg:py-2 max-lg:px-16">
          <img src="/icon/gallery.svg" alt="gallery" className="w-6 h-6 max-xl:w-5 max-xl:h-5 max-lg:w-4" />
        </div>
        <div className="bg-[#f0f0f0] w-full p-3 rounded-xl flex flex-row gap-3 max-xl:p-2 max-xl:gap-2">
          <img src="/icon/default-profile.svg" alt="" className="w-8" />
          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-[#064061] max-lg:text-sm">Lekan Okeowo</h1>
            <h2 className="text-[#aaa] text-xs max-lg:text-[10px]">demo@gmail.com</h2>
          </div>
        </div>
        <div className="flex flex-row w-full py-3 gap-4 border-e-4 border-primary-blue cursor-pointer">
          <img src="/icon/dashboard.svg" alt="" className="w-6 max-lg:w-5" />
          <h1 className="text-base max-lg:text-sm">Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
