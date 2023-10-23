import React from "react"
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FormArticle from '../components/FormArticle'
import { useDispatch } from "react-redux";
import { postArticle } from "../redux/actions/articleAction";
import { useNavigate } from "react-router-dom";

const AddArticle = (props) => {
  const dispatch = useDispatch()
  const navigete = useNavigate()

  const submitAction = (formData) => {
    dispatch(postArticle(formData,navigete))
  }

  return (
    <div className="flex flex-row w-full min-h-screen">
      <Sidebar />
      <div className="w-[80%] p-6 flex flex-col gap-4">
        <Header text={'Add Article'} />
        <FormArticle submitAction={submitAction}/>
      </div>
    </div>
  )
};

export default AddArticle;
