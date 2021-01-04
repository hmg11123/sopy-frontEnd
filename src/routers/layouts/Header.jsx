import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
 width: 100%;
 height: 70px;
 background-color: ${(props) => props.theme.mainThemeColor};
 color: ${(props) => props.theme.whiteColor};
 box-shadow: ${(props) => props.theme.boxShadow};
 margin-bottom: 40px;

 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
`;

const InnerWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: 100%;

 display: flex;
 justify-content: center;
 align-items: center;
`;

const ActionP = styled.p`
 padding: 5px;
 margin: 5px;
 color: ${(props) => props.theme.whiteColor};
 font-weight: 600;
 cursor: pointer;
 transition: 0.5s;

 &:hover {
  color: ${(props) => props.theme.pointColor};
 }
`;

const Header = ({ history }) => {
 const moveLinkHandler = (link) => {
  history.push(link);
 };
 return (
  <HeaderWrapper>
   <InnerWrapper width={"200px"}></InnerWrapper>
   <InnerWrapper>
    <ActionP onClick={() => moveLinkHandler("/")}>LOGO</ActionP>
   </InnerWrapper>
   <InnerWrapper width={"200px"}>
    <ActionP onClick={() => moveLinkHandler("/signIn")}>SIGN IN</ActionP>
    <ActionP onClick={() => moveLinkHandler("/signUp")}>SIGN UP</ActionP>
   </InnerWrapper>
  </HeaderWrapper>
 );
};

export default Header;
