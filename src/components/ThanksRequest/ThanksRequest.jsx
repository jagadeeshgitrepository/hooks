import React from "react";
import {
  Button,
  OnBoardThanksRequestContainer,
  OnBoardThanksRequestContent,
  ThanksMessage,
  ThanksMessageDescription,
  IconWrapper,
} from "./styled";
import PinScaleLogo from "../PinScaleLogo/PinScaleLogo";
const ThanksRequest = () => {
  return (
    <OnBoardThanksRequestContainer>
      <PinScaleLogo />
      <OnBoardThanksRequestContent>
        <IconWrapper></IconWrapper>
        <ThanksMessage>Thank you for your interest</ThanksMessage>
        <ThanksMessageDescription>
          We have received your request, our team will get in touch with you.
        </ThanksMessageDescription>
      </OnBoardThanksRequestContent>
    </OnBoardThanksRequestContainer>
  );
};

export default ThanksRequest;
