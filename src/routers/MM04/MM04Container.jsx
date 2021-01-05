import React, { useState } from "react";
import MM04Presenter from "./MM04Presenter";
import useInput from "../../Hooks/useInput";
import { TRY_LOGIN, CHEKC_SECRET_CODE } from "./MM04Queries";
import { useMutation } from "react-apollo-hooks";

const MM04Container = ({ history }) => {
 ////////// VARIABLE     //////////

 ////////// USE SATETE   //////////
 const inputEmail = useInput("");
 const assignment = useInput("");
 const [tab, setTab] = useState(0);

 ////////// USE REF      //////////

 ////////// USE CONTEXT  //////////

 ////////// USE QUERY    //////////

 ////////// USE MUTATION //////////
 const [tryLoginMutation] = useMutation(TRY_LOGIN);
 const [checkSecretCodeMutation] = useMutation(CHEKC_SECRET_CODE);

 ////////// USE EFFECT   //////////

 const loginClickHandler = async () => {
  console.log(inputEmail.value);

  const { data } = await tryLoginMutation({
   variables: {
    email: inputEmail.value,
   },
  });

  console.log(data.tryLogin);

  if (data.tryLogin) {
   setTab(1);
  } else {
   alert("가입된 이메일이 아닙니다");
  }
 };

 const assignmentCheckHandler = async () => {
  const { data } = await checkSecretCodeMutation({
   variables: {
    email: inputEmail.value,
    code: assignment.value,
   },
  });
  if (data.checkSecretCode) {
   alert("로그인 성공");
   history.push("/");

   // 실무기준
   // 사용자 데이터를 JWT TOKEN으로 생성하여 가져온다.
   // 크롬에서 PASSPORT TOKEN을 통해 session에 토큰을 저장하고,
   // PASSPORT TOKEN: 암호화 되어있는 데이터를 저장할수 있는 토큰
   // 모든 화면에서는 login 상태를 알기 위한 redux || contextAPI를
   // 세팅하여 로그인 상태 유지를 위한 처리를 한다.
  } else {
   alert("인증코드가 잘못되었습니다");
  }
 };

 return (
  <MM04Presenter
   inputEmail={inputEmail}
   tab={tab}
   loginClickHandler={loginClickHandler}
   assignment={assignment}
   assignmentCheckHandler={assignmentCheckHandler}
  ></MM04Presenter>
 );
};

export default MM04Container;
