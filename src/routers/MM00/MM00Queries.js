import { gql } from "apollo-boost";

// 변하지않을 꺼기 때문에 대문자
export const GET_ALL_VIDEOS = gql`
 query getAllVideos {
  getAllVideos {
   thumbnailPath
   title
   description
  }
 }
`;
