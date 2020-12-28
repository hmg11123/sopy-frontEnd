import { gql } from "apollo-boost";

export const REGIST_USER = gql`
 mutation registUser(
  $name: String!
  $email: String!
  $nickName: String!
  $mobile: String!
  $zoneCode: String!
  $address: String!
  $detailAddress: String!
 ) # $는 뭔가를 받을수 있는 준비가 되어있는 것
 # 위에서는 문자열을 받을수 있는 준비가 되어있는 것
 {
  registUser(
   name: $name
   email: $email
   nickName: $nickName
   mobile: $mobile
   zoneCode: $zoneCode
   address: $address
   detailAddress: $detailAddress
  )
 }
`;
