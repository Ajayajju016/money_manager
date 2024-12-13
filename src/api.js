import axios from "axios";

const API_URL = "https://manager-backend-fto6.onrender.com/api/transactions";

export const getTransactions = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTransaction = async (transaction) => {
  const response = await axios.post(API_URL, transaction);
  console.log(response.data);
  return response.data;
};

export const deleteTransaction = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};