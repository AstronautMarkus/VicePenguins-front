import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../../pages/auth/login";
import RegisterPage from "../../pages/auth/register";

const AuthRouter = () => {
  return (
    <Routes>
    <Route path="/*" element={<Navigate to="/auth/login" />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AuthRouter;
