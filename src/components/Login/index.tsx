import React from "react";

import { LoginForm } from "./LoginForm";

import styles from "./Login.module.css";

interface LoginProps {
  onLogin: (token: string) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};
