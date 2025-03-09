import React, { useState } from "react";

import { Button, Input, Typography } from "ui/components";

import { login } from "services/api";

import styles from "./Login.module.css";

interface LoginFormProps {
  onLogin: (token: string) => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
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
      {error && (
        <Typography variant="body2" className={styles.error}>
          {error}
        </Typography>
      )}
      
      <Input
        label="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fullWidth
      />

      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />

      <Button type="submit" variant="primary" fullWidth>
        Login
      </Button>
    </form>
  );
};
