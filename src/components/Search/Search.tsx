import { ChangeEventHandler } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  id?: string;
  className?: string;
  testId?: string;
  placeholder?: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Search = ({
  id,
  className,
  testId,
  placeholder = "Type to search...",
  onSearchChange,
  value,
}: SearchProps) => {
  return (
    <input
      id={id}
      className={`${styles.search} ${className ?? ""}`}
      data-testid={testId}
      type="search"
      aria-description="search"
      tabIndex={0}
      placeholder={`🔍 ${placeholder}`}
      onChange={onSearchChange}
      value={value}
    />
  );
};

export default Search;
