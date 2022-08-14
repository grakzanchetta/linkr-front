import { useEffect, useState } from "react";
import { useGlobal } from "../../../../context/globalContext";
import Posts from "../posts/Posts";
import { RotatingLines } from "react-loader-spinner";
import { Container, ContainerScroll, FeedContainer } from "./styles";
import Sidebar from "../../../../components/sidebar/Sidebar.js";
import getPostofHashtags from "../../../../services/api/getPostofHashtags";

export default function TimeLine({hashtag}) {
  const [hashtagPosts, setHashtagPosts] = useState(null);
  const { global, setGlobal } = useGlobal();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    global.token = token;
    getPostofHashtags(global, setGlobal, hashtag,hashtagPosts, setHashtagPosts);
  }, []);

  return (
    <>
      <Container>
        <h1>timeline</h1>
      </Container>
      {timeLineLoading(hashtagPosts, setHashtagPosts)}
    </>
  );
}

const timeLineLoading = (hashtagPosts, setHashtagPosts) =>
  posts === null ? (
    <RotatingLines strokeColor="#ffffff" width="140" />
  ) : (
    <>
      <ContainerScroll>
        <FeedContainer>
          <Posts hashtagPosts={hashtagPosts} />
        </FeedContainer>
        <Sidebar />
      </ContainerScroll>
    </>
  );
