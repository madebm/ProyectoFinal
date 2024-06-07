import React, { createContext, useReducer, useState } from 'react';
import { StockResponse } from '../../model/StockResponse';
import { UserResponse } from '../../model/UserResponse';
import { useStorage } from '../../utils/useStorage';
import { AuthReducer } from './AuthReducer';

export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token?: string;
}

export const authInitialState: AuthState = {
  status: 'checking',
};

export interface AuthContextProp {
  authState: AuthState;
  signIn: (token: string) => void;
  signOut: () => void;
  userContext: UserResponse;

  setUserContext: React.Dispatch<React.SetStateAction<UserResponse>>;
  stock: StockResponse;
  setStock: React.Dispatch<React.SetStateAction<StockResponse>>;
  balance: string;
  setBalance: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext({} as AuthContextProp);

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

  const [userContext, setUserContext] = useState<UserResponse>();
  const [stock, setStock] = useState<StockResponse>();
  const [balance, setBalance] = useState<string>();
  const { clearConfigApp } = useStorage();
  const signIn = (token: string) => {
    dispatch({ type: 'signIn', payload: { token } });
  };

  const signOut = async () => {
    dispatch({
      type: 'signOut',
      payload: {
        token: undefined,
      },
    });
    await clearConfigApp();
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        userContext,
        setUserContext,
        stock,
        setStock,
        balance,
        setBalance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
