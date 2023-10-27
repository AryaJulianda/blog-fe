import React, { useState } from "react"

const FormAuth = ({mode,submitAction}) => {
  const [inputData, setInputData] = useState({
    username:'',
    email:'',
    password:''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };

  return (
    <>
      <h1 className="text-xl font-bold text-lime-500 p-5 bg-secondary rounded-xl shadow-md shadow-lime-500">jedaNgoding;</h1>
      <div className={`w-[50%] h-fit flex flex-col p-5 gap-5 items-center bg-secondary rounded-xl shadow-sm shadow-lime-500 max-lg:p-4 max-lg:gap-4 `}>
        {/* username */}
        {mode=='register' &&
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="username" className="text-lg font-semibold text-white">username</label>
          <input type="text" id="username" className="bg-primary rounded-lg p-2 text-white" placeholder="Write your username" value={inputData.username} onChange={handleInputChange}/>
        </div>}
        {/* email */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-semibold text-white">email</label>
          <input type="email" id="email" className="bg-primary rounded-lg p-2 text-white" placeholder="Write your email" value={inputData.email} onChange={handleInputChange}/>
        </div>
        {/* password */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-semibold text-white">password</label> 
          <input type="password" id="password" className="bg-primary rounded-lg p-2 text-white" placeholder="Write your password"  value={inputData.password} onChange={handleInputChange}/>
        </div>

        {/* submit */}
        <button className="text-xl px-5 py-3 mr-auto font-semibold text-white bg-lime-500 rounded-xl" onClick={()=>submitAction(inputData)}>Submit</button>
      </div>
      <p className="text-sm font-semibold text-lime-500">{mode=='register' ? 'Already have acount?' : "Didn't have acount?"} <a href={mode=='register' ? "/auth/login" : "/auth/register"} className="underline">{mode=='register' ? "Login Here!":"Regist Here!"}</a></p>
    </>
  )
};

export default FormAuth;
