export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface DataItem {
  _id: string;
  data: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}
