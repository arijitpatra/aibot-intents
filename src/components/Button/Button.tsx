import { MouseEventHandler, ReactElement } from "react";
import styles from "./Button.module.scss";

type ButtonType = "button" | "submit";

export interface ButtonProps {
  id?: string;
  className?: string;
  testId?: string;
  type?: ButtonType;
  label: string;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  onBtnClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({
  id,
  className = "",
  testId,
  type = "button",
  label,
  prefixIcon,
  suffixIcon,
  onBtnClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`${styles.button} ${className}`}
      data-testid={testId}
      type={type}
      onClick={onBtnClick}
      disabled={disabled}
      aria-label={label}
    >
      {prefixIcon ? (
        <span className={`${styles.prefixIcon}`}>{prefixIcon}</span>
      ) : null}
      {label}
      {suffixIcon ? (
        <span className={`${styles.suffixIcon}`}>{suffixIcon}</span>
      ) : null}
    </button>
  );
};

export default Button;
