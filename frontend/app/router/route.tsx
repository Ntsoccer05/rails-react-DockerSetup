import { Route, Routes } from "react-router-dom";
import { Home } from "../src/components/Home/Home";
import { PostDetail } from "../src/components/Post/PostDetail";
import { CreatePost } from "../src/components/Post/CreatePost";
import ContactForm from "../src/components/Contact/Contact";
import { Setting } from "../src/components/Profile/Setting";
import Login from "../src/components/certification/Login";
import Register from "../src/components/certification/Register";

export const RouterConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<PostDetail />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/profile/setting" element={<Setting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};