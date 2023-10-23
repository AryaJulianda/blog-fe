import React from "react"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className="min-w-[20%]">
      <div className="w-[20%] fixed top-0 bottom-0 p-7 flex flex-col bg-secondary items-center gap-4 shadow-lg max-xl:p-5 max-lg:p-4">
        <div className="bg-primary w-full p-3 rounded-xl max-xl:p-2 max-xl:gap-2">
          <h1 className="text-xl font-bold text-center text-lime-500">jedaNgoding;</h1>
        </div>

        <div className="flex flex-row w-full py-3 gap-4 border-e-4 border-transparent hover:border-lime-500 cursor-pointer" onClick={()=>navigate('/')}>
          <img src="/icon/dashboard.svg" alt="" className="w-6 max-lg:w-5" />
          <a className="text-base font-semibold text-white max-lg:text-sm ">Dashboard</a>
        </div>

        <div className="flex flex-row w-full py-3 gap-4 border-e-4 border-transparent hover:border-lime-500 cursor-pointer" onClick={()=>navigate('/myArticles')}>
          <img src="/icon/article.svg" alt="" className="w-6 max-lg:w-5" />
          <a className="text-base font-semibold text-white max-lg:text-sm ">My Articles</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
