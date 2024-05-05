import { MouseEventHandler, ReactElement } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  id?: string;
  className?: string;
  testId?: string;
  label: string;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  onBtnClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  id,
  className,
  testId,
  label,
  prefixIcon,
  suffixIcon,
  onBtnClick,
}: ButtonProps) => {
  return (
    <button
      id={id}
      className={`${styles.button} ${className}`}
      data-testid={testId}
      onClick={onBtnClick}
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
