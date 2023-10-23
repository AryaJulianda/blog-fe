import React from "react"
import { useNavigate } from "react-router-dom";

const Header = ({text,myArt}) => {
  const navigate = useNavigate()
  return (
    <div className={`w-full flex flex-row p-5 gap-6 justify-between items-center bg-secondary rounded-xl shadow-sm shadow-lime-500 max-xl:p-5 max-xl:gap-5 max-lg:p-4 max-lg:gap-4 `}>
      <h1 className="text-xl font-semibold text-lime-500">{text}</h1>
      {myArt==true && 
      <div onClick={()=>navigate('/myArticles/add')}>
        <img src="/icon/add.svg" alt="" className="w-10 cursor-pointer"/> 
      </div>
        }
    </div>
  )
};

export default Header;
