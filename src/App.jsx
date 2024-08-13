import "./App.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Register } from "./pages";
import { useEffect } from "react";

function App() {
  const token = false;

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="app">
      {token ? (
        <Routes>
          <Route path="/*" element={<AuthenticatedLayout />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
