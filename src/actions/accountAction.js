import axios from "axios";

export const getTotalAccountBalanceByAddressZone = async (addressZone) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/v1/explorer/TotalAccountBalanceByAddressZone/${addressZone}`
    );
    console.log("response total account balance", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const GetAccountByAddress = async (address) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/v1/explorer/account/${address}`
    );
    console.log("response account by address", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
