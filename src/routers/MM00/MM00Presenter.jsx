import React from "react";
import { Wrapper, ImageBox } from "../../components/commonComponents";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const ViewText = styled.div`
 margin: 6px;
 font-size: ${(props) => props.size};
 font-weight: ${(props) => props.weight};
 color: ${(props) => (props.isTitle ? props.theme.blackColor : ``)};
 color: ${(props) => (props.isAuthor ? props.theme.grey2Color : ``)};
 color: ${(props) => (props.isDesc ? props.theme.greyColor : ``)};
`;

const BarWrapper = styled.div`
 width: 1350px;
 height: 45px;
 border-radius: 8px;
 background-color: ${(props) => props.theme.subThemeColor};
 box-shadow: ${(props) => props.theme.boxShadow};
 margin: 30px 0px;
`;

const WrapWrapper = styled(Wrapper)`
 width: 1350px;
 flex-wrap: wrap;
`;

const MM00Presenter = () => {
 return (
  <Wrapper>
   <Wrapper height={`400px`} padding={`25px`} dr={`row`}>
    <Fade left>
     <Wrapper al={`flex-end`} padding={`20px`}>
      <ImageBox
       width={`368px`}
       height={`207px`}
       bgImg={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoTIF1vwiRU7JWDUgEgpe2_05dOEGVWfxIQ&usqp=CAU`}
      ></ImageBox>
     </Wrapper>
    </Fade>
    <Fade right>
     <Wrapper al={`flex-start`} padding={`20px`}>
      <ViewText size={`20px`} weight={`700`} isTitle={true}>
       title
      </ViewText>
      <ViewText size={`14px`} weight={`400`} isTitle={true}>
       author
      </ViewText>
      <ViewText size={`16px`} weight={`500`} isTitle={true}>
       desc
      </ViewText>
     </Wrapper>
    </Fade>
   </Wrapper>
   <Zoom >
    <BarWrapper></BarWrapper>
   </Zoom >
   <Fade bottom>
    <WrapWrapper dr={`row`} margin={`0px 0px 100px 0px`}>
     <ImageBox
      width={`320px`}
      height={`180px`}
      bgImg={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoTIF1vwiRU7JWDUgEgpe2_05dOEGVWfxIQ&usqp=CAU`}
      margin={`5px`}
     ></ImageBox>
     <ImageBox
      width={`320px`}
      height={`180px`}
      bgImg={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoTIF1vwiRU7JWDUgEgpe2_05dOEGVWfxIQ&usqp=CAU`}
      margin={`5px`}
     ></ImageBox>
     <ImageBox
      width={`320px`}
      height={`180px`}
      bgImg={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoTIF1vwiRU7JWDUgEgpe2_05dOEGVWfxIQ&usqp=CAU`}
      margin={`5px`}
     ></ImageBox>
     <ImageBox
      width={`320px`}
      height={`180px`}
      bgImg={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoTIF1vwiRU7JWDUgEgpe2_05dOEGVWfxIQ&usqp=CAU`}
      margin={`5px`}
     ></ImageBox>
     <ImageBox
      width={`320px`}
      height={`180px`}
      bgImg={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoTIF1vwiRU7JWDUgEgpe2_05dOEGVWfxIQ&usqp=CAU`}
      margin={`5px`}
     ></ImageBox>
     <ImageBox
      width={`320px`}
      height={`180px`}
      bgImg={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoTIF1vwiRU7JWDUgEgpe2_05dOEGVWfxIQ&usqp=CAU`}
      margin={`5px`}
     ></ImageBox>
     <ImageBox
      width={`320px`}
      height={`180px`}
      bgImg={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoTIF1vwiRU7JWDUgEgpe2_05dOEGVWfxIQ&usqp=CAU`}
      margin={`5px`}
     ></ImageBox>
     <ImageBox
      width={`320px`}
      height={`180px`}
      bgImg={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoTIF1vwiRU7JWDUgEgpe2_05dOEGVWfxIQ&usqp=CAU`}
      margin={`5px`}
     ></ImageBox>
    </WrapWrapper>
   </Fade>
  </Wrapper>
 );
};

export default MM00Presenter;
