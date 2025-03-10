import React from "react";

import styles from "./Login.module.css";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return <div className={styles.error}>{message}</div>;
};
