import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./apiHooks/use-login-user";

export function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const addmutation = useLoginUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    addmutation.mutate(
      {
        username,
        password,
      },
      {
        onSuccess: () => {
          alert("user logged in");
          navigate("/profile")
        },
        onError: (error) => {
          alert(error || "something went wrong");
        },
      }
    );
  };

  return (
    <>
      <h1>Login here</h1>
      <label>user name </label>
      <input
        type="text"
        placeholder="name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <label>Password </label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button type="submit" onClick={handleLogin}>
        Submit
      </button>
      <span onClick={() => navigate("/register")}>sign up here</span>
    </>
  );
}
