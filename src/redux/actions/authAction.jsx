import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const login = (inputData,navigate) => async(dispatch) => {
  try {
    dispatch({type:'AUTH_PENDING'})
    const response = await axios.post(url+`/api/auth/login`,inputData);
    localStorage.setItem("access_token",response.data.accessToken);
    dispatch({type:'LOGIN_SUCCESS',payload:response.data});
    navigate('/');
  } catch (error) {
    alert(`Login failed! : ${error.response.data.error}`)
    dispatch({
      type:'LOGIN_FAILED',
      error:error,
    })
  }
}

export const regist = (inputData,navigate) => async(dispatch) => {
  try {
    dispatch({type:'AUTH_PENDING'})
    const response = await axios.post(url+`/api/auth/register`,inputData);
    dispatch({type:'REGIST_SUCCESS',payload:response.data});
    alert('Register successfully!')
    navigate('/auth/login');
  } catch (error) {
    alert('Register Failed!',error.response.data.error)
    dispatch({type:'REGIST_FAILED',error:error});
  }
}

