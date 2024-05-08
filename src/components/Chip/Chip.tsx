import styles from "./Chip.module.scss";

export interface ChipProps {
  id?: string;
  className?: string;
  testId?: string;
  label: string;
}

const Chip = ({ id, className = "", testId, label }: ChipProps) => {
  return (
    <div id={id} className={`${styles.chip} ${className}`} data-testid={testId}>
      {label}
    </div>
  );
};

export default Chip;
