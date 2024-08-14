import "../Login/Login.scss";
import { Button, Flex, Input, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPw } from "../../utils/firebase";
import { createUser } from "../../utils/firebase/firebaseUsers";

const Register = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({});

  const handleRegister = () => {
    console.log({ credentials });

    const { firstname, lastname, email, password } = credentials;

    if (!firstname) {
      message.warning("First Name is empty");
      return;
    }
    if (!lastname) {
      message.warning("Lastname is empty");
      return;
    }
    if (!email) {
      message.warning("Email is empty");
      return;
    }
    if (password.length < 6) {
      message.warning("Password is to weak");
      return;
    }

    createUserWithEmailAndPw(email, password)
      .then(({ user }) => {
        console.log({ user });

        createUser(user.uid, {
          userId: user.uid,
          fullName: `${firstname} ${lastname}`,
          email,
        }).then((createdUSer) => {
          console.log({ createdUSer });
          message.success("You register successfully!");
          navigate("/login");
        });
      })
      .catch((error) => message.error(error.message));
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
          placeholder="Enter your firstname"
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, firstname: e.target.value }))
          }
        />
        <Input
          placeholder="Enter your lastname"
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, lastname: e.target.value }))
          }
        />
        <Input
          placeholder="Enter your email"
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Input
          placeholder="Enter your password"
          onChange={(e) =>
            setCredentials((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </Flex>

      <Flex gap={10} vertical>
        <Button onClick={handleRegister}>Register</Button>

        <Button type="link" onClick={() => navigate("/login")}>
          Already registerd? Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default Register;
