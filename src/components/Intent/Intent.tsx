import Card from "../Card";
import Chip from "../Chip";
import { FaCircleCheck, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import Button from "../Button";
import { IntentType } from "../../types";
import styles from "./Intent.module.scss";
import { useState } from "react";
import { ADD, REMOVE } from "../../constants";

interface IntentProps {
  data: IntentType;
}

const Intent = ({ data }: IntentProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleBtnClick = () => {
    setIsAdded((prevState) => !prevState);
  };

  return (
    <Card>
      <div className={`${styles.intent}`}>
        <div>
          <div className={`${styles.name}`}>
            {data.name}
            {isAdded ? (
              <FaCircleCheck className={`${styles.checkmark}`} />
            ) : null}
          </div>
          <small className={`${styles.description}`}>{data.description}</small>

          <div className={`${styles.example}`}>
            <div>
              {data.trainingData.expressions.map((expression) => (
                <Chip key={expression.id} label={expression.text} />
              ))}
            </div>
            <span className={`${styles.reply}`}>Reply:</span>{" "}
            {`"${data.reply.text}"`}
          </div>
        </div>
        <div>
          <Button
            label={isAdded ? REMOVE : ADD}
            suffixIcon={isAdded ? <FaRegTrashCan /> : <FaPlus />}
            onButtonClick={handleBtnClick}
          />
        </div>
      </div>
    </Card>
  );
};

export default Intent;
