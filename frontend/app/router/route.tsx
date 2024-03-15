import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/components/Home/Home";
import { PostDetail } from "../src/components/Post/PostDetail";
import { CreatePost } from "../src/components/Post/CreatePost";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};