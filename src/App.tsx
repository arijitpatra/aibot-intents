import { Suspense, lazy } from "react";
import "./App.scss";
const IntentsContainer = lazy(() => import("./components/IntentsContainer"));

function App() {
  return (
    <>
      <h1 style={{ fontSize: "2.5rem" }}>Choose intents:</h1>
      <Suspense fallback="Loading...">
        <IntentsContainer />
      </Suspense>
    </>
  );
}

export default App;
