import { Routes, Route } from "react-router-dom";

import Index from "../../pages/home/index/index";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default HomeRouter;
