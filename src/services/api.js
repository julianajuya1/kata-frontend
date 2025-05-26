import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL; 
console.log('Variable: ' +  API_URL);
export const fetchTopClient = () => axios.get(`${API_URL}/maximunAmount`);

export const fetchDispersedClient = () => {
  return axios.get(`${API_URL}/dispersedClient`);
};

export const fetchAllTransactions = async () => {
  return axios.get(`${API_URL}/`);
};
