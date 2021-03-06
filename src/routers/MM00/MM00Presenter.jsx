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

const FileInput = styled.input`
 display: none;
`;

const FileLabel = styled.label`
 width: 120px;
 height: 25px;
 line-height: 25px;
 background-color: ${(props) => props.theme.checkColor};
 color: ${(props) => props.theme.whiteColor};
 box-shadow: ${(props) => props.theme.boxShadow};
 margin: 5px;
 border-radius: ${(props) => props.theme.radius};
 cursor: pointer;
 text-align: center;
`;

const Image = styled.img`
 width: 400px;
 height: 400px;
 border: 1px soild #777;
 margin: 10px;
 object-fit: cover;
`;

const MM00Presenter = ({ videoDatum, fileChangeHandler, imagePath }) => {
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
   <Zoom>
    <BarWrapper></BarWrapper>
   </Zoom>
   <WrapWrapper dr={`row`} margin={`0px 0px 100px 0px`}>
    {videoDatum ? (
     videoDatum.length === 0 ? (
      <Wrapper>미디어 목록이 없습니다.</Wrapper>
     ) : (
      videoDatum.map((data, idx) => {
       return (
        <Fade bottom delay={idx * 60} key={idx}>
         <ImageBox
          width={`320px`}
          height={`180px`}
          bgImg={data.thumbnailPath}
          margin={`5px`}
         ></ImageBox>
        </Fade>
       );
      })
     )
    ) : (
     <Wrapper>조회 중 입니다.</Wrapper>
    )}
   </WrapWrapper>
   {/** FILE UPLOAD TEST */}
   <Image src={`${imagePath}`} />
   <FileInput type="file" id="file-js" onChange={fileChangeHandler} />
   <FileLabel htmlFor="file-js">파일선택</FileLabel>
  </Wrapper>
 );
};

export default MM00Presenter;
