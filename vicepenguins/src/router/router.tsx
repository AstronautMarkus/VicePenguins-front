import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../App.css";
import RootLayout from "../components/layout/layout";
import AuthRouter from "./routers/authRouter";
import HomeRouter from "./routers/homeRouter";

const AppRouter = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/*" element={<HomeRouter />} />
          <Route path="/auth/*" element={<AuthRouter />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default AppRouter;
