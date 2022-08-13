import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobal } from "../../context/globalContext";
import Header from "../../components/header/Header";
import Page from "../../containers/page/Page";
import getPostsByUser from "../../services/api/getPostsByUser";
import Post from "../home/timeLine/post/Post";
import { Container } from "../home/timeLine/posts/styles";

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
        <h4>{posts[0].username}’s posts</h4>
        {posts.map((post, index) => (
          <Post
            data={post}
            posts={posts}
            setPosts={setPosts}
            index={index}
            key={index}
          />
        ))}
      </>
    );

  return (
    <Page>
      <Header />
      <Container>{hanlePost()}</Container>
    </Page>
  );
}
