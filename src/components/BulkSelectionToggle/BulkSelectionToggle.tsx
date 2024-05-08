import { FaListUl } from "react-icons/fa6";
import { ADD_ALL, REMOVE_ALL } from "../../constants";
import styles from "./BulkSelectionToggle.module.scss";

interface SelectionCountProps {
  selectedCount: number;
  totalCount: number;
  onClick: () => void;
}

const BulkSelectionToggle = ({
  selectedCount,
  totalCount,
  onClick,
}: SelectionCountProps) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.bulkSelection}`}
      data-testid="bulkSelectionToggle"
    >
      <FaListUl />
      {selectedCount !== totalCount ? ADD_ALL : REMOVE_ALL}
    </div>
  );
};

export default BulkSelectionToggle;
