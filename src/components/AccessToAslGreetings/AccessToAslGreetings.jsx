import React from "react";
import { Button } from "../OnBoardEarlyAccess/styled.js";
import {
  AccessToAslGreetingsContainer,
  AccessToAslGreetingsImage,
  AccessToAslGreetingsMessage,
  AccessToAslCongratulations,
} from "./styled";
import PinScaleLogo from "../PinScaleLogo/PinScaleLogo";
const AccessToAslGreetings = () => {
  return (
    <AccessToAslGreetingsContainer>
      <PinScaleLogo />
      <AccessToAslGreetingsImage src="" />
      <AccessToAslCongratulations>Congratulations!</AccessToAslCongratulations>
      <AccessToAslGreetingsMessage>
        You got access dashboard
      </AccessToAslGreetingsMessage>
      <Button congratulations>Go to Dashboard</Button>
    </AccessToAslGreetingsContainer>
  );
};

export default AccessToAslGreetings;
