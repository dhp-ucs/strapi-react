import { axiosInstance } from './axiosFetch';

export const fetchApi = async (data) => {
  const resp = await axiosInstance.get(data);
  // console.log(resp,"MYRE")
  return resp;
};
