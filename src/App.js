import React, { useState } from "react";
import OnBoardEarlyAccess from "./components/OnBoardEarlyAccess/OnBoardEarlyAccess";
import ThanksRequest from "./components/ThanksRequest/ThanksRequest";
import AccessToAslGreetings from "./components/AccessToAslGreetings/AccessToAslGreetings";
import AslIntroduction from "./components/AslIntroduction/AslIntroduction";
import AslForm from "./components/AslForm/AslForm";
import AllHooksExamples from "./components/AllHooksExamples.jsx";
//<OnBoardEarlyAccess />
const App = () => {
  const [mount, setMount] = useState(false);
  return (
    <div>
      {!mount && <AllHooksExamples />}
      <button onClick={() => setMount(prev => !prev.mount)}>
        COMPONENTUNMOUNT
      </button>
    </div>
  );
};

export default App;
