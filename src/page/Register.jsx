import React from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormAuth from "../components/FormAuth";
import { regist } from "../redux/actions/authAction";

const Register = (props) => {
  const dispatch = useDispatch()
  const navigete = useNavigate()

  const submitAction = (formData) => {
    dispatch(regist(formData,navigete))
  }

  return (
    <div className="flex flex-col w-full gap-5 min-h-screen justify-center items-center">
      <FormAuth mode={'register'} submitAction={submitAction}/>
    </div>
  )
};

export default Register;
