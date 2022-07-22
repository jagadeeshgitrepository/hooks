import React, { ReactElement } from "react";
import { Button } from "../OnBoardEarlyAccess/styled.js";
import {
  AslFormContainer,
  AslFormHeader,
  AslFormHeading,
  AslFormDescription,
  ProgressBarWrapper,
  ProgressBar,
  AslFormBackNavigationContainer,
  AslFormBackNavigationText,
} from "./styled";
import PinScaleLogo from "../PinScaleLogo/PinScaleLogo";
const AslForm = (): ReactElement => {
  return (
    <AslFormContainer>
      <ProgressBarWrapper>
        <ProgressBar bgColor />
        <ProgressBar bgColor />
        <ProgressBar bgColor />
      </ProgressBarWrapper>
      <AslFormBackNavigationContainer>
        <AslFormBackNavigationText>Back</AslFormBackNavigationText>
      </AslFormBackNavigationContainer>
      <AslFormHeader>
        <AslFormHeading>Expressive Interest Form</AslFormHeading>
        <AslFormDescription>
          This information will be keep confidential and Fill the all fields
        </AslFormDescription>
      </AslFormHeader>
      <Button next>Next</Button>
    </AslFormContainer>
  );
};

export default AslForm;
