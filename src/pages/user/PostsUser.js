import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobal } from "../../context/globalContext";
import Header from "../../components/header/Header";
import Page from "../../containers/page/Page";
import getPostsByUser from "../../services/api/getPostsByUser";
import Post from "../home/timeLine/post/Post";
import { Container } from "../home/timeLine/posts/styles";
import { ContainerScroll } from "../home/timeLine/main/styles";
import { FeedContainer } from "../home/timeLine/main/styles";
import { UserInfo } from "./styles";
import Sidebar from "../../components/sidebar/Sidebar";

export default function PostsUser() {
  const [posts, setPosts] = useState(null);
  const { id } = useParams();
  const { global } = useGlobal();

  useEffect(() => {
    if (posts !== null) setPosts(null);

    getPostsByUser(global, id, setPosts);
  }, [id]);

  const hanlePost = () =>
    posts === null ? (
      "loading"
    ) : (
      <>
        <UserInfo>
          <img src={global.user.pictureUrl} alt="User" />
          <h4>{posts[0].username}’s posts</h4>
        </UserInfo>
        <ContainerScroll>
          {posts.map((post, index) => (
            <Post
              data={post}
              posts={posts}
              setPosts={setPosts}
              index={index}
              key={index}
            />
          ))}
          <Sidebar />
        </ContainerScroll>
      </>
    );

  return (
    <Page>
      <Header />
      <Container>{hanlePost()}</Container>
    </Page>
  );
}
