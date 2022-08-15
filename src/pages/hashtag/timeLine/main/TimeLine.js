import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobal } from "../../../../context/globalContext";
import Posts from "../posts/Posts";
import { RotatingLines } from "react-loader-spinner";
import { Container, ContainerScroll, FeedContainer } from "./styles";
import Sidebar from "../../../../components/sidebar/Sidebar.js";
import getPostofHashtags from "../../../../services/api/getPostofHashtags";

export default function TimeLine({ hashtag }) {
  const [hashtagPosts, setHashtagPosts] = useState(null);
  const { global } = useGlobal();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    global.token = token;
    getPostofHashtags(global, hashtag, setHashtagPosts, navigate);
  }, [hashtag]);

  return (
    <>
      <Container>
        <h1>{hashtag}</h1>
      </Container>
      {timeLineLoading(hashtagPosts, setHashtagPosts)}
    </>
  );
}

const timeLineLoading = (hashtagPosts, setHashtagPosts) =>
  hashtagPosts === null ? (
    <RotatingLines strokeColor="#ffffff" width="140" />
  ) : (
    <>
      <ContainerScroll>
        <FeedContainer>
          <Posts
            hashtagPosts={hashtagPosts}
            setHashtagPosts={setHashtagPosts}
          />
        </FeedContainer>
        <Sidebar />
      </ContainerScroll>
    </>
  );
