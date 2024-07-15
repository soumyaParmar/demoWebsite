import axiosInstance from "../../../axiosConfig";

export const getData = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const postData = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};
