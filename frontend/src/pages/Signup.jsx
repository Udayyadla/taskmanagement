import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
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
      await axios.post(`${url}signup`, { email, password });
      alert("signup success");
      navigate("/");
    } catch (error) {
      alert("Login failed. Check your credentials.");
    }
  }
  return (
    <div>
      <h2>Signup</h2>
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
        <button type="submit">SignUp</button>
        Are you existing user? <Link to="/">Login</Link>
      </form>
    </div>
  );
};

export default Signup;
