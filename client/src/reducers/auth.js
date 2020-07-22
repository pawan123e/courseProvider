import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    GET_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
 } from '../actions/types';

const initialState = {
 token: localStorage.getItem('token'),
 isAuthenticated: null,
 loading: true,
 user: null,
 error: null,
 user: null,
 email: null,
 recoverToken: null
}

export default (state = initialState, action) => {
 switch(action.type) {
     case REGISTER_SUCCESS:
     case LOGIN_SUCCESS:     
        localStorage.setItem('token', action.payload.token)
        return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false,
            error: null,
            recoverToken:null,
            email: null
        }
     case REGISTER_FAIL:
     case LOGIN_FAIL:
     case AUTH_ERROR: 
     case LOGOUT:
     case CLEAR_ERRORS: 
         return {
             ...state,
             error: null,
             recoverToken:null,
             email: null
         }
     case GET_USER: 
          return {
              ...state,
              isAuthenticated: true,
              loading: false,
              user: action.payload,
              recoverToken:null,
              email: null
          }                    
     default :
        return state;   
 }
}