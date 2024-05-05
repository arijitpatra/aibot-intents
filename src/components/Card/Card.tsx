import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  id?: string;
  className?: string;
  testId?: string;
  isSelected?: boolean;
  children: ReactNode;
}

const Card = ({
  id,
  className,
  testId,
  isSelected = false,
  children,
}: CardProps) => {
  return (
    <section
      id={id}
      className={`${styles.card} ${isSelected ? styles.selected : ""} ${
        className ?? ""
      }`}
      data-testid={testId}
    >
      {children}
    </section>
  );
};

export default Card;
