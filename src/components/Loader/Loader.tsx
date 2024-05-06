import { LOADING_MESSAGE } from "../../constants";

interface LoaderProps {
  id?: string;
  className?: string;
  testId?: string;
}

const Loader = ({ id, className = "", testId }: LoaderProps) => {
  return (
    <div id={id} className={`${className}`} data-testid={testId}>
      ⌛ {LOADING_MESSAGE}...
    </div>
  );
};

export default Loader;
