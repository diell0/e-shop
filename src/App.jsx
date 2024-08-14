import "./App.scss";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login, Register } from "./pages";
import { useEffect } from "react";
import AuthenticatedLayout from "./components/AuthenticatedLayout/AuthenticatedLayout";
import { getUserByUid } from "./utils/firebase/firebaseUsers";
import currentUserStore from "./store/currentUserStore";

function App() {
  const userId = localStorage.getItem("userId");

  const { setUser } = currentUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      getUserByUid(userId)
        .then((user) => {
          if (user) {
            setUser(user);
          } else {
            localStorage.setItem("userId", "");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Error fetching user, " + error);
        });
    } else {
      navigate("/login");
    }
  }, [userId]);

  return (
    <div className="app">
      {userId ? (
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
