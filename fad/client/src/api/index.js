import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.43.161:5000' });



export const apply = (formData) => API.post('/apply/',formData);
export const Fetch = (formData) => API.post('/fetch/',formData);
export const Mail = (formData) => API.post('/mail/',formData);


export const signIn = (formData) => API.post('/auth/', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);
