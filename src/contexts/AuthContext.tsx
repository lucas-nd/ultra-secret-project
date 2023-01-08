import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import decode from "jwt-decode";

interface IAuthContext {
  authenticated: boolean;
  setAuthenticated: (newState: boolean) => void;
  signin: (email: string, password: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children?: ReactNode;
}

const initialValue: IAuthContext = {
  authenticated: false,
  setAuthenticated: () => {},
  signin: () => {},
  logout: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: AuthProviderProps) => {
  //TO-DO
  // Prevent authenticated initial value start false
  const [authenticated, setAuthenticated] = useState(
    initialValue.authenticated
  );

  const verifyRefreshToken = () => {
    const { refreshToken } = parseCookies();

    if (!!!refreshToken) {
      setAuthenticated(false);
      return;
    }

    //TO-DO
    //Realizar requisição para recuperar o token
    //Setar os novos tokens nos Cookies

    setAuthenticated(true);
  };

  useEffect(() => {
    verifyRefreshToken();
  }, []);

  const signin = (email: string, password: string) => {
    //TO-DO
    //Realizar requisição de login

    const response = {
      accessToken: "asd",
      refreshToken: "asd",
    };

    const { accessToken, refreshToken } = response;

    setCookie(undefined, "token", accessToken, {
      maxAge: 60 * 60 * 24 * 60,
      path: "/",
    });

    setCookie(undefined, "refreshToken", refreshToken, {
      maxAge: 60 * 60 * 24 * 60,
      path: "/",
    });

    setAuthenticated(true);
  };

  const logout = () => {
    //TO-DO
    //Realizar requisição de logout

    setAuthenticated(false);

    destroyCookie(undefined, "token", { path: "/" });
    destroyCookie(undefined, "refreshToken", { path: "/" });
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, setAuthenticated, signin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
