import React, { useState } from "react";
import "./App.css";

import ScoreComponent from "./components/scoreComponent/scoreComponent";
import ChoiceComponent from "./components/choiceComponent/choiceComponent";
import ResultsComponent from "./components/resultsComponent/resultsComponent";

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  return (
    <div className='App'>
      <ScoreComponent userScore={userScore} />
      {!userChoice ? (
        <ChoiceComponent
          setUserChoice={setUserChoice}
          userChoice={userChoice}
        />
      ) : (
        <ResultsComponent
          userChoice={userChoice}
          setUserChoice={setUserChoice}
        />
      )}
    </div>
  );
}

export default App;
