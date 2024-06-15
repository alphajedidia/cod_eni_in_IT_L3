import classNames from "classnames";
import type { FC, ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "neutral" | "primary" | "search";
  disabled?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  kind = "primary",
  disabled = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      aria-disabled={disabled}
      className={classNames(styles.button, styles[kind], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
