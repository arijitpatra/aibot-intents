import Card from "../Card";
import Chip from "../Chip";
import {
  FaCircleCheck,
  FaPlus,
  FaRegTrashCan,
  FaAngleRight,
} from "react-icons/fa6";
import Button from "../Button";
import { IntentType } from "../../types";
import styles from "./Intent.module.scss";
import { ADD, REMOVE } from "../../constants";

interface IntentProps {
  data: IntentType;
  isSelected: boolean;
  onCtaClick: (id: string) => void;
}

const Intent = ({ data, isSelected, onCtaClick }: IntentProps) => {
  const handleCtaClick = () => {
    onCtaClick(data.id);
  };

  return (
    <Card isSelected={isSelected}>
      <div className={`${styles.intent}`}>
        <div>
          <div className={`${styles.name}`}>
            {data.name}
            {isSelected ? (
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
            <div className={`${styles.reply}`}>
              <FaAngleRight />
              <b>
                <i>AI:</i>
              </b>
              {`"${data.reply.text}"`}
            </div>
          </div>
        </div>
        <div>
          <Button
            className={`${styles.cta}`}
            label={isSelected ? REMOVE : ADD}
            suffixIcon={isSelected ? <FaRegTrashCan /> : <FaPlus />}
            onBtnClick={handleCtaClick}
          />
        </div>
      </div>
    </Card>
  );
};

export default Intent;
