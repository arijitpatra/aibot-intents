import Card from "../Card";
import Chip from "../Chip";
import { FaCircleCheck, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import Button from "../Button";
import { IntentResponse } from "../../types";
import styles from "./Intent.module.scss";
import { ADD, REMOVE } from "../../constants";
import Reply from "../Reply";

interface IntentProps {
  data: IntentResponse;
  isSelected?: boolean;
  onCtaClick: (id: string) => void;
}

const Intent = ({ data, isSelected = false, onCtaClick }: IntentProps) => {
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
              <FaCircleCheck
                data-testid={`checkmark-${data.id}`}
                className={`${styles.checkmark}`}
              />
            ) : null}
          </div>
          <small className={`${styles.description}`}>{data.description}</small>

          <div className={`${styles.example}`}>
            <div>
              {data.trainingData.expressions.map((expression) => (
                <Chip key={expression.id} label={expression.text} />
              ))}
            </div>
            <Reply text={data.reply.text} />
          </div>
        </div>
        <div>
          <Button
            className={`${styles.cta}`}
            label={isSelected ? REMOVE : ADD}
            suffixIcon={isSelected ? <FaRegTrashCan /> : <FaPlus />}
            onBtnClick={handleCtaClick}
            testId={`cta-${data.id}`}
          />
        </div>
      </div>
    </Card>
  );
};

export default Intent;
