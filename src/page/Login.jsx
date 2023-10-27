import React from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormAuth from "../components/FormAuth";
import { login } from "../redux/actions/authAction";

const Login = (props) => {
  const dispatch = useDispatch()
  const navigete = useNavigate()

  const submitAction = (formData) => {
    console.log(formData)
    dispatch(login(formData,navigete))
  }


  return (
    <div className="flex flex-col w-full gap-5 min-h-screen justify-center items-center">
      <FormAuth mode={'login'} submitAction={submitAction}/>
    </div>
  )
};

export default Login;
