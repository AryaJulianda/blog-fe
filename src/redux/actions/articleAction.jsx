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
          dispatch({type:'GET_ARTICLES_FAILED',error:err.message})
        }
    };
};

export const postArticle = (inputData,navigate) => {
  return async(dispatch) => {
    
    try {
      dispatch({type:'PENDING'})
      const res = await axios.post(`${base_url}/api/articles`, inputData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }})
      dispatch({type:'POST_ARTICLE_SUCCESS',payload:res.data})
      navigate('/myArticles')
    } catch (error) {
      dispatch({type:'POST_ARTICLE_FAILED',error:error})
    }
  }
}

export const updateArticle = (id,formData,navigate) => {
  return async(dispatch) => {
    console.log({id})
    try {
      dispatch({type:'PENDING'})
      const res = await axios.put(`${base_url}/api/articles/${id}`, formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }})
      dispatch({type:'PUT_ARTICLE_SUCCESS',payload:res.data})
      navigate('/myArticles')
    } catch (error) {
      dispatch({type:'PUT_ARTICLE_FAILED',error:error})
    }
  }
}

export const deleteArticle = (id) => {
  return async(dispatch) => {
    try {
      dispatch({type:'PENDING'})
      const res = await axios.delete(`${base_url}/api/articles/${id}`)
      dispatch({type:'DELETE_ARTICLE_SUCCESS',payload:res.data})
      dispatch(getAllArticles())
    } catch (error) {
      dispatch({type:'DELETE_ARTICLE_FAILED',error:error.message})
    }
  }
}