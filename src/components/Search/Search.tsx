import { ChangeEventHandler } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  id?: string;
  className?: string;
  testId?: string;
  placeholder?: string;
  onSearch: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Search = ({
  id,
  className = "",
  testId,
  placeholder = "Type to search...",
  onSearch,
  value,
}: SearchProps) => {
  return (
    <input
      id={id}
      className={`${styles.search} ${className}`}
      data-testid={testId}
      type="search"
      aria-description="search"
      tabIndex={0}
      placeholder={`🔍 ${placeholder}`}
      onChange={onSearch}
      value={value}
    />
  );
};

export default Search;
