import React, { useEffect } from "react"
import Sidebar from "../components/Sidebar";
import ListArt from "../components/ListArt";
import { useDispatch } from "react-redux";
import {  getMyArticles } from "../redux/actions/articleAction";

const MyArticles = (props) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMyArticles())
  },[])

  return (
    <div className="flex flex-row w-full min-h-screen">
      <Sidebar />
      <div className="w-[80%] p-6">
        <ListArt header={'My Articles'} myArt={true} />
        
      </div>
    </div>
  )
};

export default MyArticles;
