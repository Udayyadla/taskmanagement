import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const url = "https://task-management-g2nm.onrender.com/";
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formdata);
    const { email, password } = formdata;
    try {
      const res = await axios.post(`${url}login`, {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      alert("login success");
      navigate("/tasks");
    } catch (error) {
      alert("Login failed. Check your credentials.");
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formdata.email}
          onChange={(e) => setFormData({ ...formdata, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formdata.password}
          onChange={(e) =>
            setFormData({ ...formdata, password: e.target.value })
          }
          required
        />
        <button type="submit">Login</button>
        <p>
          Are you a new user? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
