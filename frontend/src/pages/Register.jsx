import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/register", { name, email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-box">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" onChange={e => setName(e.target.value)} />
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
