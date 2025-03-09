import axios from "axios";

import { LoginCredentials, AuthResponse, DataItem } from "../types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/login", credentials);
  return response.data;
};

export const fetchData = async (): Promise<DataItem[]> => {
  const response = await api.get<DataItem[]>("/data");
  return response.data;
};

export const uploadCSV = async (
  file: File
): Promise<{ message: string; count: number }> => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await api.post<{ message: string; count: number }>(
    "/upload",
    formData
  );
  return response.data;
};
