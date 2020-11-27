import React from "react";
import { useHistory } from "react-router-dom";
import { atom, useRecoilState } from "recoil";
import { api } from "helpers";
import { User, Register, Login } from ".";

let reqInterId = -1;
let resInterId = -1;

export const userState = atom<User | undefined>({
  key: "user",
  default: undefined
});

export function useAuth() {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);

  const setInterceptors = React.useCallback(
    (token: string) => {
      reqInterId = api.axios.interceptors.request.use(config => {
        config.headers.token = token;
        return config;
      });
      resInterId = api.axios.interceptors.response.use(
        response => response,
        error => {
          const status = error.response?.status ?? 400;
          if (status === 401) {
            history.push("/login");
          }
          return Promise.reject(error);
        }
      );
    },
    [history]
  );

  React.useEffect(() => {
    if (!!user) {
      const token = window.btoa(encodeURIComponent(JSON.stringify(user)));
      setInterceptors(token);
    }
  }, [user, setInterceptors]);

  const login = React.useCallback(
    async (data: Login) => {
      return api
        .post<{ user: User; token: string }>("auth/login", data)
        .then(res => {
          if (!!res.user && !!res.token) {
            setUser(res.user);
            setInterceptors(res.token);
          }
          return res.user;
        });
    },
    [setUser, setInterceptors]
  );

  const register = React.useCallback(
    async (data: Register) => {
      return api
        .post<{ user: User; token: string }>("auth/register", data)
        .then(res => {
          if (!!res.user && !!res.token) {
            setUser(res.user);
            setInterceptors(res.token);
          }
          return res.user;
        });
    },
    [setUser, setInterceptors]
  );

  const logout = React.useCallback(() => {
    setUser(undefined);
    api.axios.interceptors.request.eject(reqInterId);
    api.axios.interceptors.response.eject(resInterId);
  }, [setUser]);

  return { user, register, login, logout };
}
