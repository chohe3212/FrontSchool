import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuthContext from "./useAuthContext";

export const useSignup = () => {
  // 에러정보를 관리합니다.
  const [error, setError] = useState(null);

  // 통신 상태를 관리합니다.
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = (email, password, displayName) => {
    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        if (!user) {
          throw new Error("회원 정보를 불러올 수 없습니다.");
        }

        // 프로필 가져오기
        // 첫번째 인자 : firebase는 사용자 정보 사용자가 로그인 성공하면, 사용자를 만들어줌.
        // 두번째 인자 :
        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            // 회원 정보를 context에 업데이트 합니다.
            dispatch({ type: "login", payload: user });
            setError(null);
            setIsPending(false);
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
            console.log(user);
          });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.error(error);
      });
  };

  return { error, isPending, signup };
};
