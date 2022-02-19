import {  CREATE,FETCH_ALL ,AUTH,MAIL} from '../constants/actionTypes';
import * as api from '../api';



export const apply = (formData) => async (dispatch) => {
    try {
        console.log(formData);
      const data1  = await api.apply(formData);
      console.log(data1.data);
      if(data1.status === 202){
        alert(data1.data);
      }
  
      dispatch({ type: CREATE, payload: data1 });
    } catch (error) {
      console.log(error);
    }
  };

  export const fetch = (formData) => async (dispatch) => {
    try {
        console.log(formData);
      const data1  = await api.Fetch(formData);
      console.log(data1.data);
      if(data1.status === 202){
        alert(data1.data);
      }
  
      dispatch({ type: FETCH_ALL, payload: data1 });
    } catch (error) {
      console.log(error);
    }
  };

  export const mail = (formData) => async (dispatch) => {
    try {
        console.log(formData);
      const data1  = await api.Mail(formData);
      console.log(data1.data);
      if(data1.status === 202){
        alert(data1.data);
      }
  
      dispatch({ type: MAIL, payload: data1 });
    } catch (error) {
      console.log(error);
    }
  };

  // export const signin = (formData, router) => async (dispatch) => {
  //   try {
  //     console.log(formData);
  //     const data = await api.signIn(formData);
  //     console.log(data);
  //     dispatch({ type: AUTH,payload: data.data});
  //     if(data.data.result.Type === "HOD"){
  //       router.push('/hod');
  //     }
  //     else if(data.data.result.Type === "FAC")
  //     {
  //       router.push('/fac');
  //     }
  //     else{
  //       router.push('/hr');
  //     }
  //   } catch (error) {
  //     // alert("invalid!  ");  
  //     console.log(error.message);
  //   }
  // };