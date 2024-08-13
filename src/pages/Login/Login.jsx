import "./Login.scss";
import { Button, Flex, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
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
