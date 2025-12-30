import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

function Navbar() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("token");

  const logout = async () => {
    await api.post("/logout");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav>
      {loggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
