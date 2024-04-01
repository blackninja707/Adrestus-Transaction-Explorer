import axios from "axios";

export const getBlockByHash = async (hash) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/v1/explorer/block/${hash}`
    );
    console.log("response block by hash", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const findAllBlocksBetweenRange = async (currentPage, blockPerPage) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/api/v1/explorer/findAllBlocksBetweenRange/${currentPage * blockPerPage}/${(currentPage + 1) * blockPerPage}`
    );
    console.log("response blocks between Range", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
