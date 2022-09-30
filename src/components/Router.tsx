import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Home } from "../pages/home";
import { Post } from "../pages/Post";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  );
};
