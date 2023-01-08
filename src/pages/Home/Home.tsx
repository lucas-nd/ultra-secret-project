import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-1/3">
          <div className="chat chat-start">
            <div className="chat-header">any</div>
            <div className="chat-bubble">Ultra Secret Project will start.</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-header">Lucas</div>
            <div className="chat-bubble">Finally. We can more!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
