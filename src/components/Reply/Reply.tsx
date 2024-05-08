import { FaAngleRight } from "react-icons/fa6";
import styles from "./Reply.module.scss";

interface ReplyProps {
  text: string;
}

const Reply = ({ text }: ReplyProps) => {
  return (
    <div className={`${styles.reply}`}>
      <FaAngleRight />
      <b>
        <i>AI:</i>
      </b>
      {`"${text}"`}
    </div>
  );
};

export default Reply;
