import React from "react";
import styles from "./Typography.module.css";

type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption";

interface Props {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: Element;
}

export const Typography = ({
  variant = "body1",
  children,
  className = "",
  as,
}: Props) => {
  const Component =
    as || ((variant.startsWith("h") ? variant : "p") as Element);

  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};
