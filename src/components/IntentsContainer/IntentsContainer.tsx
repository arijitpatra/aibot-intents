import Intent from "../Intent";
import styles from "./IntentsContainer.module.scss";
import intents from "../../../public/intents.json";
import { FaListUl } from "react-icons/fa6";
import { ChangeEvent, useState } from "react";
import {
  ADD_ALL,
  REMOVE_ALL,
  ADDED,
  BLANK_STATE_MESSAGE,
} from "../../constants";
import Search from "../Search";

const IntentsContainer = () => {
  // TODO: alternate approach instead of array - Set or Object
  const [selectedIntentIds, setSelectedIntentIds] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  // TODO: '?' in the searchValue can cause error like - Invalid regular expression: /?/: Nothing to repeat
  const filteredIntents = intents.filter(
    (intent) =>
      intent.name.toLowerCase().match(searchValue.toLowerCase()) ||
      intent.reply.text.toLowerCase().match(searchValue.toLowerCase()) ||
      intent.trainingData.expressions.some((expression) =>
        expression.text.toLowerCase().includes(searchValue.toLowerCase())
      )
  );

  const handleCtaToggle = (intentId: string) => {
    if (selectedIntentIds.includes(intentId)) {
      setSelectedIntentIds((prevState) =>
        prevState.filter((item) => item !== intentId)
      );
    } else {
      setSelectedIntentIds([...selectedIntentIds, intentId]);
    }
  };

  const handleBulkSelectionToggle = () => {
    if (selectedIntentIds.length !== intents.length) {
      setSelectedIntentIds(intents.map((intent) => intent.id));
    } else {
      setSelectedIntentIds([]);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <>
      <div className={`${styles.searchAndSelection}`}>
        <Search
          onSearchChange={handleSearch}
          value={searchValue}
          placeholder="Type to search for intent / input / reply..."
        />
        <div className={`${styles.selectionControls}`}>
          <div>
            {selectedIntentIds.length} / {intents.length} <small>{ADDED}</small>
          </div>
          <div
            onClick={handleBulkSelectionToggle}
            className={`${styles.bulkSelection}`}
          >
            <FaListUl />
            {selectedIntentIds.length !== intents.length ? ADD_ALL : REMOVE_ALL}
          </div>
        </div>
      </div>

      {filteredIntents.length === 0 ? { BLANK_STATE_MESSAGE } : null}

      {filteredIntents?.map((intent) => (
        <Intent
          key={intent.id}
          data={intent}
          onCtaClick={handleCtaToggle}
          isSelected={selectedIntentIds.includes(intent.id) || false}
        />
      ))}
    </>
  );
};

export default IntentsContainer;
