import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "../src/components/Home/Card";
import { PostDetail } from "../src/components/PostDetail/PostDetail";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/detail/:id" element={<PostDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};