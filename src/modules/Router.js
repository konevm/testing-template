import { Route, Routes } from "react-router-dom";
import { PostsList } from "../components/postslist";
import styled from "@emotion/styled";
import { Post } from "../pages/post";

const EmptyPage = styled.main`
  color: "purple";
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
`;

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="post/:id" element={<Post />} />
      <Route path="*" element={<EmptyPage>Страница не найдена</EmptyPage>} />
    </Routes>
  );
};
