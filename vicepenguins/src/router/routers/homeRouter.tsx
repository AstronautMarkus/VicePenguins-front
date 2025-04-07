import { Routes, Route } from "react-router-dom";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} />
    </Routes>
  );
};

export default HomeRouter;
