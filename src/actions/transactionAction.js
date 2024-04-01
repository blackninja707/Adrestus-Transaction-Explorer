import axios from "axios";

export const getTransactionByHash = async (hash) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/v1/explorer/transaction/${hash}`
    );
    console.log("response transaction by to address:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetTransactionsByFromAddress = async (fromAddress) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/v1/explorer/transactionsByFromAddress/${fromAddress}`
    );
    console.log("response transaction by from address:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetTransactionsByBlockHash = async (blockHash) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/v1/explorer/transactionsByHash/${blockHash}`
    );
    console.log("response transaction by hash:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const findAllTransactionsBetweenRange = async (currentPage, txPerPage) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/v1/explorer/findAllTransactionsBetweenRange/${currentPage * txPerPage}/${txPerPage}`
    );
    console.log("response transactions between Range", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
