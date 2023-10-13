import { useState } from "react";
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import useAuthContext from "./useAuthContext";

export const useLogin = () => {
  // 에러정보를 관리합니다.
  const [error, setError] = useState(null);

  // 통신 상태를 관리합니다.
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // login
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "login", payload: user });
        setIsPending(false);

        if (!user) {
          throw new Error("회원 정보를 불러올 수 없습니다.");
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        console.error(error);
      });
  };

  return { error, isPending, login };
};
