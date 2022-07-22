import React from "react";
import { Button } from "../OnBoardEarlyAccess/styled.js";
import {
  AslIntroductionContainer,
  AslIntroductionImage,
  AslWelcomeHeading,
  AslInstructionsContainer,
  AslCheckCircleIconWrapper,
  AslInstructionsDescription,
  AslInstructionsWrapper,
} from "./styled";
import PinScaleLogo from "../PinScaleLogo/PinScaleLogo";
const AslIntroduction = () => {
  return (
    <AslIntroductionContainer>
      <PinScaleLogo />
      <AslIntroductionImage src="" />
      <AslWelcomeHeading>Welcome!!</AslWelcomeHeading>
      <AslInstructionsWrapper>
        <AslInstructionsContainer>
          <AslCheckCircleIconWrapper></AslCheckCircleIconWrapper>
          <AslInstructionsDescription>
            Lorem ipsum dolor sit amet.
          </AslInstructionsDescription>
        </AslInstructionsContainer>
        <AslInstructionsContainer>
          <AslCheckCircleIconWrapper></AslCheckCircleIconWrapper>
          <AslInstructionsDescription>
            Lorem ipsum dolor sit amet, consectetur.
          </AslInstructionsDescription>
        </AslInstructionsContainer>
        <AslInstructionsContainer>
          <AslCheckCircleIconWrapper></AslCheckCircleIconWrapper>
          <AslInstructionsDescription>
            Lorem ipsum dolor sit amet.
          </AslInstructionsDescription>
        </AslInstructionsContainer>
        <AslInstructionsContainer>
          <AslCheckCircleIconWrapper></AslCheckCircleIconWrapper>
          <AslInstructionsDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </AslInstructionsDescription>
        </AslInstructionsContainer>
      </AslInstructionsWrapper>
      <Button>Continue</Button>
    </AslIntroductionContainer>
  );
};

export default AslIntroduction;
