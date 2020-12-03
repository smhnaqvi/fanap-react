import React from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState({});
  const [token, setToken] = React.useState(null);
  const history = useHistory();

  const signUp = (username, password, name) => {
    return axios.post('/auth/register', {
      userName: username,
      password: password,
      name:name
    })
  };

  const signIn = (username, password) => {
    return axios.post('/auth/login', {
      userName: username,
      password: password
    })
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.replace("/signin")
  };

  const value = React.useMemo(() => ({ token, user,setToken,setUser, signUp, signIn, signOut }), [user,token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
