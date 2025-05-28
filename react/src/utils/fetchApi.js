import { axiosInstance, axiosPostArticle } from './axiosFetch';

export const fetchApi = async (data) => {
  const resp = await axiosInstance.get(data);
  return resp;
};

export const postApi = async (data) => {
  const resp = await axiosPostArticle.post('/', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return resp;
};
