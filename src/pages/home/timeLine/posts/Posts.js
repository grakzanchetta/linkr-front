import Post from "../post/Post";
import { Container } from "./styles";

export default function Posts({ posts, setPosts }) {
  const hanlePosts = () =>
    posts.length > 0 ? (
      posts.map((data, index) => (
        <Post
          data={data}
          posts={posts}
          setPosts={setPosts}
          key={index}
          index={index}
        />
      ))
    ) : (
      <p>There are no posts yet</p>
    );

  return <Container>{hanlePosts()}</Container>;
}
