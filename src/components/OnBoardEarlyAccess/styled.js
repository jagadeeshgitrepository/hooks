import tw, { styled } from "twin.macro";

export const OnBoardEarlyAccessContainer = styled.div`
  ${tw`flex flex-col items-center h-full`}
  padding-left: 38px;
  padding-top: 24px;
  padding-right: 39px;
`;
export const OnBoardNoAccessImage = styled.img`
  width: 162.45px;
  height: 146.2px;
  margin-top: 18px;
`;
export const OnBoardNoDashboardAccessParagraph = styled.p`
  ${tw`text-base  leading-6 mt-8 font-medium`};
  font-family: "Inter";
  font-style: normal;
  text-align: center;

  color: #334155;
  font-weight: 500;
  margin-bottom: 0px;
`;
export const OnBoardNoDashboardAccessDescription = styled.p`
  ${tw`text-sm  leading-5 mt-2 mb-0 font-normal`};
  font-weight: 400;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  color: #475569;
`;
export const Button = styled.button`
  ${tw`text-sm  leading-5  font-medium`}
  ${props => (props.video || props.congratulations ? tw`h-9` : tw`h-11`)};
  ${props => (props.next ? tw`bg-blue-100` : tw`bg-blue-600`)};
  ${props => (props.logout ? tw`bg-white` : tw``)};
  ${props => (props.next ? tw`mt-8` : tw`mt-6`)};
  ${props => (props.logout ? tw` mt-4` : tw``)};
  ${props => (props.next ? tw`text-blue-600` : tw`text-white`)};
  color: ${props => (props.logout ? "#334155" : tw``)};
  width: ${props => (props.congratulations ? "161px" : "100%")};
  border-radius: ${props =>
    props.video || props.congratulations ? "10px" : "12px"};
  border: ${props => (props.logout ? " 1px solid #CBD5E1" : "0px")};
  font-family: "Inter";
`;
