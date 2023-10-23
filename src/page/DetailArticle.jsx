import React, { useEffect } from "react"
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { getArticleById } from "../redux/actions/articleAction";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns';

const DetailArticle = (props) => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {article} = useSelector((s)=>s.article)
  useEffect(()=>{
    dispatch(getArticleById(id))
    console.log({article})
  },[])
  return (
    <div className="flex flex-row w-full min-h-screen">
      <Sidebar />
      <div className="w-[80%] p-6">
        <div className={`w-full flex flex-col p-6 gap-10 bg-secondary rounded-xl shadow-md shadow-lime-500 max-xl:p-5 max-xl:gap-5 max-lg:p-4 max-lg:gap-4 `}>
          <h1 className="text-2xl font-semibold text-lime-500">{article?.title}</h1>
          <div className="border-b-2 border-lime-500 pb-10 flex flex-row justify-between items-end">
            <div className="w-[50%] h-80 bg-black rounded-xl bg-cover bg-center flex justify-center items-center" style={{backgroundImage:`url('${article?.img}')`}}>{article.img=='not found' && (<p className="text-white text-lg font-semibold">No Image</p>)}</div>
            <div className="text-right">
              <p className="text-lg font-semibold text-lime-500">{article?.authorName}</p>
              <p className="text-lg font-semibold text-white">{ format(new Date(article?.date), 'd MMMM yyyy')}</p>
            </div>
          </div>
          <p className="text-lg font-medium text-white">
            {article?.content}
          </p>
        </div>
      </div>
    </div>
  )
};

export default DetailArticle;
