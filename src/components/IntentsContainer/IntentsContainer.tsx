// import { IntentType } from "../../types";
import Intent from "../Intent";
import styles from "./IntentsContainer.module.scss";
import intents from "../../../public/intents.json";

// interface IntentsContainerProps {
//   intents: IntentType[];
// }

console.log(intents);

const IntentsContainer = () => {
  return (
    <>
      <div className={`${styles.searchAndSelection}`}>
        <input type="search" />
        <u>Add/Remove All</u>
      </div>
      {intents.map((intent) => (
        <Intent key={intent.id} data={intent} />
      ))}
    </>
  );
};

export default IntentsContainer;
