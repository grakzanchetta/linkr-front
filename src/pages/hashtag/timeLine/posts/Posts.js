import Post from "../post/Post";
import { Container } from "./styles";

export default function Posts({ hashtagPosts, setHashtagPosts }) {
  const hanlePosts = () =>
    hashtagPosts.map((data, index) => (
      <Post
        data={data}
        hashtagPosts={hashtagPosts}
        setHashtagPosts={setHashtagPosts}
        key={index}
        index={index}
      />
    ));

  return <Container id="postsContainer">{hanlePosts()}</Container>;
}
