import tw, { styled } from "twin.macro";

export const OnBoardThanksRequestContainer = styled.div`
  ${tw`flex flex-col items-center h-full`}
  padding:24px;
`;
export const OnBoardThanksRequestContent = styled.div`
  ${tw`flex flex-col justify-start items-center`}
  margin-top:98px;
`;

export const IconWrapper = styled.div`
  ${tw`w-12 h-12 bg-red-500`}
`;
export const ThanksMessage = styled.p`
  ${tw`text-lg  leading-7 mb-0 mt-4 font-semibold`}
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;

  /* identical to box height, or 156% */

  text-align: center;

  /* Light / blue-gray / 700 */

  color: #334155;
`;

export const ThanksMessageDescription = styled.p`
  ${tw`text-sm  leading-5 mt-2 font-medium`}
  font-family: 'Inter';
  font-style: normal;

  text-align: center;

  /* Light / blue-gray / 500 */

  color: #64748b;
`;
