import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface CardProps {
  id?: string;
  className?: string;
  testId?: string;
  children: ReactNode;
}

const Card = ({ id, className, testId, children }: CardProps) => {
  return (
    <section
      id={id}
      className={`${styles.card} ${className}`}
      data-testid={testId}
    >
      {children}
    </section>
  );
};

export default Card;
