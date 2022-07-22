import tw, { styled } from "twin.macro";

export const AccessToAslGreetingsContainer = styled.div`
  ${tw`flex flex-col justify-start items-center p-6`}
`;

export const AccessToAslGreetingsImage = styled.img`
  ${tw`mt-4`}
  width: 193.03px;
  height: 220px;
`;
export const AccessToAslCongratulations = styled.h1`
  ${tw`mt-6 text-xl  mb-0 leading-7  font-semibold`};
  font-family: "Inter";
  font-style: normal;

  /* identical to box height, or 140% */

  text-align: center;

  /* Light / blue-gray / 700 */

  color: #334155;
`;

export const AccessToAslGreetingsMessage = styled.p`
  ${tw`text-base  mt-2 mb-0 leading-6 font-normal`};
  font-family: "Inter";
  font-style: normal;

  text-align: center;

  /* Light / blue-gray / 600 */

  color: #475569;
`;
