import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      Register page
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login!
      </Button>
    </div>
  );
};

export default Register;
