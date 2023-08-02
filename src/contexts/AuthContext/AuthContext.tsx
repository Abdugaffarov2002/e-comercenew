import { Interests } from "@mui/icons-material";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { createContext } from "react";
import { IAuthContextTypes, IUserCredenttials } from "./types";
import { TUser } from "../../models/user";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

export const authContext = createContext<IAuthContextTypes | null>(null);

interface IAuthContextProps {
  children: ReactNode;
}

const AuthContext: FC<IAuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<TUser>(null);

  async function register({ email, password }: IUserCredenttials) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      console.log(e.code);
      console.log(e.code);
    }
  }

  async function login({ email, password }: IUserCredenttials) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      console.log(e.code);
      console.log(e.code);
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (e: any) {
      console.log(e.code);
      console.log(e.code);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const value = {
    user,
    register,
    login,
    logout,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
