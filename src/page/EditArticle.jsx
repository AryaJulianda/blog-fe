import React, { useEffect } from "react"
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FormArticle from '../components/FormArticle'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticleById, updateArticle } from "../redux/actions/articleAction";

const EditArticle = (props) => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitAction = (formData) => {
    // formData.forEach((value, key) => {
    //   console.log(key, value);
    // });
    dispatch(updateArticle(id,formData,navigate))
  }

  useEffect(()=>{
    console.log('id',id)
    dispatch(getArticleById(id))
  },[])

  return (
    <div className="flex flex-row w-full min-h-screen">
      <Sidebar />
      <div className="w-[80%] p-6 flex flex-col gap-4">
        <Header text={'Edit Article'} />
        <FormArticle submitAction={submitAction} edit={true} />
      </div>
    </div>
  )
};

export default EditArticle;