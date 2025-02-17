import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../axios";

export const loginUser = async (payload) => {
  const response = await axiosInstance.post("login", payload);
  localStorage.setItem("token", response.data.token);
  return response;
};

export const signupUser = async (payload) => {
  const response = await axiosInstance.post("register", payload);
  return response;
};

export const GetUserProfile = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");
      const response = await axiosInstance.get("profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response;
    },
  });
};
