import Post from "../post/Post";
import { Container } from "./styles";

export default function Posts({ posts, setPosts }) {
  const hanlePosts = () =>
    typeof posts !== "string" ? (
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
      <p>{posts}</p>
    );

  return <Container>{hanlePosts()}</Container>;
}
