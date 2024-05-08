import Intent from "../Intent";
import styles from "./IntentsContainer.module.scss";
import intents from "../../intents.json";
import { ChangeEvent, useMemo, useState } from "react";
import {
  NO_INTENTS_MESSAGE,
  PLACEHOLDER_FOR_INTENT_SEARCH_INPUT,
} from "../../constants";
import Search from "../Search";
import { hasNoSpecialCharacters } from "../../utils";
import SelectionCount from "../SelectionCount";
import BulkSelectionToggle from "../BulkSelectionToggle";
import { useDebounce } from "../../hooks";

const IntentsContainer = () => {
  const [selectedIntentIds, setSelectedIntentIds] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue);

  const searchValueTrimmedAndLowerCase = debouncedSearchValue
    .trim()
    .toLowerCase();

  // filter matching intent name / expression / reply based on search query
  const filteredIntents = useMemo(
    () =>
      intents.filter(
        (intent) =>
          intent.name.toLowerCase().match(searchValueTrimmedAndLowerCase) ||
          intent.reply.text
            .toLowerCase()
            .match(searchValueTrimmedAndLowerCase) ||
          intent.trainingData.expressions.some((expression) =>
            expression.text
              .toLowerCase()
              .includes(searchValueTrimmedAndLowerCase)
          )
      ),
    [searchValueTrimmedAndLowerCase]
  );

  // for add/remove button in the card
  const handleCtaToggle = (intentId: string) => {
    if (selectedIntentIds.includes(intentId)) {
      setSelectedIntentIds((prevState) =>
        prevState.filter((item) => item !== intentId)
      );
    } else {
      setSelectedIntentIds([...selectedIntentIds, intentId]);
    }
  };

  // for add/remove all
  const handleBulkSelectionToggle = () => {
    if (selectedIntentIds.length !== intents.length) {
      const allIntentIds = intents.map((intent) => intent.id);
      setSelectedIntentIds(allIntentIds);
    } else {
      setSelectedIntentIds([]);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (hasNoSpecialCharacters(value) || value === "") {
      setSearchValue(value);
    }
  };

  return (
    <>
      <div className={`${styles.searchAndSelection}`}>
        <Search
          onSearch={handleSearch}
          value={searchValue}
          placeholder={`${PLACEHOLDER_FOR_INTENT_SEARCH_INPUT}...`}
        />
        <div className={`${styles.selectionControls}`}>
          <SelectionCount
            selectedCount={selectedIntentIds.length}
            totalCount={intents.length}
          />
          <BulkSelectionToggle
            selectedCount={selectedIntentIds.length}
            totalCount={intents.length}
            onClick={handleBulkSelectionToggle}
          />
        </div>
      </div>

      {filteredIntents?.length === 0 ? NO_INTENTS_MESSAGE : null}

      <div className={`${styles.intentsWrapper}`}>
        {filteredIntents?.map((intent) => (
          <Intent
            key={intent.id}
            data={intent}
            onCtaClick={handleCtaToggle}
            isSelected={selectedIntentIds.includes(intent.id) || false}
          />
        ))}
      </div>
    </>
  );
};

export default IntentsContainer;
