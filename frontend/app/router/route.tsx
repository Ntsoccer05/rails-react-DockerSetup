import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../src/components/Home/Home";
import { PostDetail } from "../src/components/Post/PostDetail";
import { CreatePost } from "../src/components/Post/CreatePost";
import LoginForm from "../src/components/LoginPage";

export const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<PostDetail />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
};