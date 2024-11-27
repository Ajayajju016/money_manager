import axios from "axios";

const API_URL = "https://money-manager-backend-13wq.onrender.com";

export const getTransactions = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTransaction = async (transaction) => {
  const response = await axios.post(API_URL, transaction);
  return response.data;
};

export const deleteTransaction = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};