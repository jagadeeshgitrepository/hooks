import tw, { styled } from "twin.macro";

export const AslFormContainer = styled.div`
  ${tw`flex flex-col justify-start items-center  h-screen px-6`}
  background-image:url("https://res.cloudinary.com/dmpepn8dm/image/upload/v1658312201/BG_gamqeb.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const AslFormBackNavigationContainer = styled.div`
  ${tw`flex flex-row justify-between self-start  items-start`};
  width: 53px;
  border: 1px solid red;
`;

export const AslFormBackNavigationText = styled.div`
  ${tw`text-sm leading-5 font-medium`};
  font-family: "Inter";
  font-style: normal;

  /* identical to box height, or 143% */

  text-align: center;

  /* Light / blue-gray / 600 */

  color: #475569;
`;

export const ProgressBarWrapper = styled.ul`
  ${tw`flex flex-row justify-between p-0 w-full  mt-4 items-start `};
`;
export const ProgressBar = styled.li`
  ${tw`even:mx-2 w-full `};

  height: 2px;
  list-style-type: none;

  /* Light / blue-gray / 300 */

  background-color: ${props => (props.bgColor ? "#2563EB" : " #cbd5e1")};
  /* Shadow / 2xl */

  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;
export const AslFormHeader = styled.div`
  ${tw`flex flex-col justify-start mt-4 self-end  items-start`};

  background-image: url("https://res.cloudinary.com/dmpepn8dm/image/upload/v1658313150/Asset_1_2_1_pxymld.png");
  background-size: 119px, 84px;
  width: 336px;

  height: 84px;
  margin-right: -24px;

  background-repeat: no-repeat;
  border: 1px solid red;
  background-position: 100% 100%;
`;

export const AslFormHeading = styled.h1`
  ${tw`text-xl leading-7 mb-1 mt-0 font-bold`};

  font-family: "Inter";
  font-style: normal;

  /* identical to box height, or 140% */

  /* Light / blue-gray / 700 */

  color: #334155;
`;

export const AslFormDescription = styled.p`
  ${tw`text-xs  m-0 leading-4 font-normal`};
  max-width: 187px;
  font-family: "Inter";

  font-style: normal;

  /* or 133% */

  /* Light / blue-gray / 600 */

  color: #475569;
`;
