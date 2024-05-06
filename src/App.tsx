import { Suspense, lazy } from "react";
import "./App.scss";
import Loader from "./components/Loader";
import { INTENTS_HEADING } from "./constants";
const IntentsContainer = lazy(() => import("./components/IntentsContainer"));

function App() {
  return (
    <>
      <h1>{INTENTS_HEADING}:</h1>
      <Suspense fallback={<Loader />}>
        <IntentsContainer />
      </Suspense>
    </>
  );
}

export default App;
