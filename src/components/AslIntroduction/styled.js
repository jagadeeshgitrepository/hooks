import tw, { styled } from "twin.macro";

export const AslIntroductionContainer = styled.div`
  ${tw`flex flex-col justify-start items-center p-6`}
`;
export const AslIntroductionImage = styled.div`
  ${tw`mt-4 bg-red-50`};
  width: 141px;
  height: 156px;
`;

export const AslWelcomeHeading = styled.h1`
  ${tw`text-xl  mt-3 mb-0 self-start leading-7  font-semibold`};
  font-family: "Inter";
  font-style: normal;

  /* identical to box height, or 140% */

  text-align: center;

  /* Light / blue-gray / 700 */

  color: #334155;
`;

export const AslInstructionsContainer = styled.div`
  ${tw`flex flex-row justify-start items-start mt-4`};
`;

export const AslInstructionsWrapper = styled.div`
  ${tw`flex flex-col justify-start items-start`}
`;
export const AslCheckCircleIconWrapper = styled.div`
  ${tw`w-6 h-6  flex-shrink-0 bg-yellow-500`}
`;

export const AslInstructionsDescription = styled.p`
  ${tw`text-sm leading-5 mt-0 mb-0 ml-2 font-normal`};
  font-family: "Inter";
  font-style: normal;

  /* Light / blue-gray / 600 */

  color: #475569;
`;
