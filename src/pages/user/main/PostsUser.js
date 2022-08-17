import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobal } from "../../../context/globalContext";
import Header from "../../../components/header/Header";
import Page from "../../../containers/page/Page";
import getPostsByUser from "../../../services/api/getPostsByUser";
import Relationships from "../relationships/Relationships";
import Post from "../../home/timeLine/post/Post";
import { Container } from "../../home/timeLine/posts/styles";
import { ContainerScroll } from "../../home/timeLine/main/styles";
import { FeedContainer } from "../../home/timeLine/main/styles";
import { UserInfo, Box } from "./styles";
import Sidebar from "../../../components/sidebar/Sidebar";

export default function PostsUser() {
  const [posts, setPosts] = useState(null);
  const { id } = useParams();
  const { global } = useGlobal();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null && global.token === null) {
      global.token = JSON.parse(token);
    }

    if (posts !== null) setPosts(null);

    getPostsByUser(global, id, setPosts, navigate);
  }, [id]);

  const hanlePost = () =>
    posts === null ? (
      "loading"
    ) : (
      <>
        <Box>
          <UserInfo>
            <img src={global.user.pictureUrl} alt="User" />
            <h4>
              {global.users.filter(user => user.id == id)[0].username}’s posts
            </h4>
          </UserInfo>
          {hanleRelationships(id, global.user.id)}
        </Box>
        <ContainerScroll>
          <FeedContainer>
            <Container>
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <Post
                    data={post}
                    posts={posts}
                    setPosts={setPosts}
                    index={index}
                    key={index}
                  />
                ))
              ) : (
                <p>This user has no post</p>
              )}
            </Container>
          </FeedContainer>
          <Sidebar />
        </ContainerScroll>
      </>
    );

  return (
    <Page>
      <Header />
      {hanlePost()}
    </Page>
  );
}

const hanleRelationships = (id, userId) =>
  id != userId ? <Relationships id={id} /> : "";
