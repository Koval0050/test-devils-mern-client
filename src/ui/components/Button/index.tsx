import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  className = "",
  ...props
}) => (
  <button
    className={`${styles.button} ${styles[variant]} ${styles[size]} ${
      fullWidth ? styles.fullWidth : ""
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);
