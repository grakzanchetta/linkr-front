import Post from "../post/Post";
import { Container } from "./styles";
// import { ReactTagify } from "react-tagify";

export default function Posts({ posts }) {
  const hanlePosts = () =>
    posts.length > 0 ? (
      posts.map((data, index) => <Post data={data} key={index} />)
    ) : (
      <p>There are no posts yet</p>
    );

  return <Container>{hanlePosts()}</Container>;
}
// tagClicked={(tag)=> alert(tag)