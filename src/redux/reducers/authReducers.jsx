const initialState = {
  user: {},
  accessToken: null,
  refreshToken:null,
  authLoading:false,
  isError:false,
  error:null
}

export const authReducers = (state=initialState,action) => {
  switch (action.type) {
    case 'AUTH_PENDING' :
      console.log('loading...')
      return {
        ...state,authLoading:true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        accessToken : action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        authLoading:false
      }
    case 'LOGIN_FAILED':
      console.log({error:action.error})
      return {
        ...state,
        error:action.error,
        isError:true,
        authLoading:false
      }
    case 'LOGOUT':
      console.log({action})
      return {
        ...state,
        user: {},
        isError:false,
        authLoading:false
      }
    case 'REGIST_SUCCESS':
      console.log(action)
      return {
        ...state,
        user: action.payload.user,
        accessToken : action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        authLoading:false
      }
    case 'REGIST_FAILED':
      return {
        ...state,
        error:action.error,
        isError:true,
        user:null,
        authLoading:false,
      }

    default :
      return state;
  }
}