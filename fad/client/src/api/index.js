import axios from 'axios';

const API = axios.create({ baseURL: 'http://192.168.43.161:5000' });



export const apply = (formData) => API.post('/portal/apply/',formData);
export const Fetch = (formData) => API.post('/portal/fetch/',formData);
export const Mail = (formData) => API.post('/portal/mail/',formData);


export const signIn = (formData) => API.post('/portal/auth/', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);
