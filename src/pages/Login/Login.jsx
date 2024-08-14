import "./Login.scss";
import { Button, Flex, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sigInWithEmailAndPw } from "../../utils/firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email) {
      message.warning("Email is empty");
      return;
    }
    if (password.length < 6) {
      message.warning("Password is to weak");
      return;
    }

    sigInWithEmailAndPw(email, password)
      .then(({ user }) => {
        localStorage.setItem("userId", user.uid);
        message.success("Logged in Successfully");
        navigate("/");
      })
      .catch((error) => {
        message.error(error.message);
      });
  };

  return (
    <Flex
      vertical
      gap={20}
      align="center"
      justify="center"
      className="login-page"
    >
      <h1>Welcome</h1>

      <Flex gap={10} vertical>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Flex>

      <Flex gap={10} vertical>
        <Button onClick={handleLogin}> Login</Button>

        <Button type="link" onClick={() => navigate("/register")}>
          Dont have an account? Register!
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
