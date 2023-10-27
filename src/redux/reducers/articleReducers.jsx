const initialState = {
  listArticles: [],
  article:{},
  isError:false,
  isLoading : false,
};

export const articleReducers = (state = initialState, action) => {
  switch (action.type) {
      case 'PENDING':
        return {
            ...state,
            isLoading:true,
        };
      //get article by id
      case 'GET_ARTICLE_SUCCESS':
        return {
            ...state,
            article: action.payload,
            isLoading:false
        };
      case 'GET_ARTICLE_FAILED':
        return {
          ...state,
          isError: true,
          isLoading:false
        }

      // get all articles
      case 'GET_ARTICLES_SUCCESS':
        return {
            ...state,
            listArticles: action.payload,
            isLoading:false

        };
      case 'GET_ARTICLES_FAILED':
        return {
          ...state,
          isError: true,
          isLoading:false
        }

      // get my articles
      case 'GET_MY_ARTICLES_SUCCESS':
        return {
            ...state,
            listArticles: action.payload,
            isLoading:false

        };
      case 'GET_MY_ARTICLES_FAILED':
        return {
          ...state,
          isError: true,
          isLoading:false
        }

      // post article
      case 'POST_ARTICLE_SUCCESS':
        return {
            ...state,
            isLoading:false,
        };
      case 'POST_ARTICLE_FAILED':
        return {
          ...state,
          isError: true,
          isLoading:false
        }

      // put article
      case 'PUT_ARTICLE_SUCCESS':
        return {
            ...state,
            showModal:true,
            isLoading:false

        };
      case 'PUT_ARTICLE_FAILED':
        return {
          ...state,
          isError: true,
          isLoading:false
        }

      //delete ARTICLE
      case 'DELETE_ARTICLE_SUCCESS':
        return {
            ...state,
            isLoading:false
        };
      case 'DELETE_ARTICLE_FAILED':
        return {
          ...state,
          isError: true,
          isLoading:false
        }
      default:
        return state;
  }
};

