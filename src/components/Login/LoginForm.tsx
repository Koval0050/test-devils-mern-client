import React, { useState } from "react";

import { login } from "services/api";

import { FormInput } from "./FormInput";
import { ErrorMessage } from "./ErrorMessage";

import styles from "./Login.module.css";

interface LoginFormProps {
  onLogin: (token: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ username, password });
      localStorage.setItem("token", response.token);
      onLogin(response.token);
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <ErrorMessage message={error} />
      <FormInput
        id="username"
        label="Username"
        type="text"
        value={username}
        onChange={setUsername}
      />
      <FormInput
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      <button type="submit">Login</button>
    </form>
  );
};
