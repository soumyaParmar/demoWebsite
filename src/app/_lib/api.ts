import axiosInstance from "../../../axiosConfig";
import axios from "axios";

interface SuccessResponse {
  data: {
    status: string;
    statusCode: number;
    response: {
      VisitorID: string;
    };
  };
  status?: number;
}

interface ErrorResponse {
  error: boolean;
  message: string;
  status?: number;
}

export const getData = async (
  url: string
): Promise<SuccessResponse | ErrorResponse> => {
  try {
    const response = await axiosInstance.get(url);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        error: true,
        message: error.response?.data?.message || "An error occurred",
      };
    } else {
      return {
        error: true,
        message: "An unknown error occurred",
      };
    }
  }
};

export const postData = async (
  url: string,
  data: any
): Promise<SuccessResponse | ErrorResponse> => {
  try {
    const response = await axiosInstance.post(url, data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        error: true,
        message: error.response?.data?.message || "An error occurred",
      };
    } else {
      return {
        error: true,
        message: "An unknown error occurred",
      };
    }
  }
};
