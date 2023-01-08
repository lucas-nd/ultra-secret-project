import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const { authenticated, signin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  if (!!authenticated) return <Navigate to="/" replace />;

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
