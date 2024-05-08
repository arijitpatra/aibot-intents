import { ADDED } from "../../constants";

interface SelectionCountProps {
  selectedCount: number;
  totalCount: number;
}

const SelectionCount = ({ selectedCount, totalCount }: SelectionCountProps) => {
  return (
    <div data-testid="selectionCount">
      <b>{selectedCount}</b>
      <small>
        {" "}
        / {totalCount} {ADDED}
      </small>
    </div>
  );
};

export default SelectionCount;
