import axios from 'axios';

const base_url = import.meta.env.VITE_BASE_URL;

export const getArticleById = (id) => {
    return async(dispatch) => {
        const url =`${base_url}/api/articles/${id}`
        try {
          dispatch({type:'PENDING'})
          const res = await axios.get(url);
          dispatch({type:'GET_ARTICLE_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'GET_ARTICLE_FAILED',error:err.message})
        }
    };
};

export const getAllArticles = () => {
  console.log({base_url})
    return async(dispatch) => {
      const url =`${base_url}/api/articles` ;
        try {
          dispatch({type:'PENDING'})
          const res = await axios.get(url);
          dispatch({type:'GET_ARTICLES_SUCCESS',payload:res.data});
        }catch(err){
          dispatch({type:'GET_ARTICLES_FAILED',error:err})
        }
    };
};

export const getMyArticles = () => {
  const token = localStorage.getItem('access_token');
  return async(dispatch) => {
    const url =`${base_url}/api/articles/mine` ;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
      try {
        dispatch({type:'PENDING'})
        const res = await axios.get(url,config);
        dispatch({type:'GET_MY_ARTICLES_SUCCESS',payload:res.data});
      }catch(err){
        dispatch({type:'GET_MY_ARTICLES_FAILED',error:err})
      }
  };
};

export const postArticle = (inputData,navigate) => {
  const token = localStorage.getItem('access_token');
  return async(dispatch) => {
    try {
      dispatch({type:'PENDING'})
      const res = await axios.post(`${base_url}/api/articles`, inputData,{
        headers:{
          'Content-Type':'multipart/form-data',
          Authorization: `Bearer ${token}`
        }})
      dispatch({type:'POST_ARTICLE_SUCCESS',payload:res.data})
      navigate('/myArticles')
    } catch (error) {
      dispatch({type:'POST_ARTICLE_FAILED',error:error})
    }
  }
}

export const updateArticle = (id,formData,navigate) => {
  const token = localStorage.getItem('access_token');
  return async(dispatch) => {
    try {
      dispatch({type:'PENDING'})
      const res = await axios.put(`${base_url}/api/articles/${id}`, formData,{
        headers:{
          'Content-Type':'multipart/form-data',
          Authorization: `Bearer ${token}`
        }})
      dispatch({type:'PUT_ARTICLE_SUCCESS',payload:res.data})
      navigate('/myArticles')
    } catch (error) {
      dispatch({type:'PUT_ARTICLE_FAILED',error:error})
    }
  }
}

export const deleteArticle = (id) => {
  const token = localStorage.getItem('access_token');
  return async(dispatch) => {
    try {
      dispatch({type:'PENDING'})
      const res = await axios.delete(`${base_url}/api/articles/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      dispatch({type:'DELETE_ARTICLE_SUCCESS',payload:res.data})
      dispatch(getMyArticles())
    } catch (error) {
      dispatch({type:'DELETE_ARTICLE_FAILED',error:error.message})
    }
  }
}