import React from "react";
import {
  OnBoardEarlyAccessContainer,
  OnBoardNoAccessImage,
  OnBoardNoDashboardAccessParagraph,
  OnBoardNoDashboardAccessDescription,
  Button,
} from "./styled";
import PinScaleLogo from "../PinScaleLogo/PinScaleLogo";
const OnBoardEarlyAccess = () => {
  return (
    <OnBoardEarlyAccessContainer>
      <PinScaleLogo />
      <OnBoardNoAccessImage src="https://www.figma.com/file/pKNqtiTCMKmEhWcn2701uq/Dashboard_PINscale?node-id=18606%3A162769" />
      <OnBoardNoDashboardAccessParagraph>
        You don’t have access to ASL Dashboard
      </OnBoardNoDashboardAccessParagraph>
      <OnBoardNoDashboardAccessDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
        tristique lectus
      </OnBoardNoDashboardAccessDescription>
      <Button>Request Early Access</Button>
      <Button logout>Logout</Button>
    </OnBoardEarlyAccessContainer>
  );
};

export default OnBoardEarlyAccess;
