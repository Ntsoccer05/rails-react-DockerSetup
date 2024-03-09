import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/components/Home/Home";
import { PostDetail } from "../src/components/PostDetail/PostDetail";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};