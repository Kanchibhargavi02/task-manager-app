import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Register</h1>

      <input type="text" placeholder="Enter Name" />

      <br /><br />

      <input type="email" placeholder="Enter Email" />

      <br /><br />

      <input type="password" placeholder="Enter Password" />

      <br /><br />

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;