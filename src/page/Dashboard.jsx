import React, { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar";
import ListArt from "../components/ListArt";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "../redux/actions/articleAction";

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllArticles())
  }, []);

  return (
    <div className="flex flex-row w-full min-h-screen">
      <Sidebar />
      <div className="w-[80%] p-6">
        <ListArt header={'Mau baca apa hari ini?'}/>
      </div>
    </div>
  );
};

export default Dashboard;
