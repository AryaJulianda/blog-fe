import React from "react"
import { Navigate, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { deleteArticle } from "../redux/actions/articleAction";

const listArt = ({ header,myArt }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {listArticles} = useSelector((s)=>s.article)

  return (
    <div className="w-full flex flex-col gap-4">
      <Header text={header} myArt={myArt} />
      {listArticles.map((value,index)=>{
        return(
          <div className={`w-full flex flex-row p-6 gap-6 bg-secondary rounded-xl shadow-sm max-xl:p-5 max-xl:gap-5 max-lg:p-4 max-lg:gap-4 `} key={index}>
            <div className="min-w-[30%] h-52 bg-black rounded-xl bg-cover bg-center flex justify-center items-center" style={{backgroundImage:`url(${value?.img}`}}>{value?.img=='not found' && (<p className="text-white text-lg font-semibold">No Image</p>)}</div>
            <div className="w-full flex flex-col justify-between">
              <h1 className="text-2xl font-semibold text-white hover:text-lime-500 cursor-pointer hover:underline" onClick={()=>navigate('/detail/'+value?.id)}>{value?.title}</h1>
              <div className="flex flex-row justify-between gap-2">
                <div className="flex-1">
                  <p className="text-lg font-semibold text-lime-500">{value?.authorName}</p>
                  <p className="text-lg font-semibold text-white">{ format(new Date(value?.date), 'd MMMM yyyy')}</p>
                </div>
                {myArt==true &&
                  <>
                    <img src="/icon/edit.svg" alt="" className="w-12 h-12 p-2 cursor-pointer rounded-xl bg-lime-500" onClick={()=>navigate('/myArticles/edit/'+value?.id)}/>
                    <img src="/icon/delete.svg" alt="" className="w-12 h-12 p-2 cursor-pointer rounded-xl bg-red-400" onClick={()=>dispatch(deleteArticle(value?.id))}/>
                  </>
                }
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default listArt;
