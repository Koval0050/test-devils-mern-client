import { Typography } from "ui/components";

import { LoginForm } from "./LoginForm";

import styles from "./Login.module.css";

interface LoginProps {
  onLogin: (token: string) => void;
}

export const Login = ({ onLogin }: LoginProps) => (
  <div className={styles.loginContainer}>
    <Typography variant="h2" className={styles.title}>
      Login
    </Typography>
    
    <LoginForm onLogin={onLogin} />
  </div>
);
