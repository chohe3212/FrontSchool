import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// context에 접근하기 위한 훅

export default function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
