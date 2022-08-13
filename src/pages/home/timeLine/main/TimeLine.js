import { useEffect, useState } from "react";
import { useGlobal } from "../../../../context/globalContext";
import Form from "../form/Form";
import Posts from "../posts/Posts";
import getPosts from "../../../../services/api/getPosts";
import { RotatingLines } from "react-loader-spinner";
import { Container, ContainerScroll } from "./styles";
import Sidebar from "../../../../components/sidebar/InnerSidebar";

export default function TimeLine() {
  const [posts, setPosts] = useState(null);
  const { global, setGlobal } = useGlobal();

  useEffect(() => {
    getPosts(global, setGlobal, setPosts);
  }, []);

  return (
    <>
      <Container>
        <h1>timeline</h1>
      </Container>
      {timeLineLoading(posts, setPosts)}
    </>
  );
}

const timeLineLoading = (posts, setPosts) =>
  posts === null ? (
    <RotatingLines strokeColor="#ffffff" width="140" />
  ) : (
    <ContainerScroll>
    <>
      <Form posts={posts} setPosts={setPosts} />
      <Posts posts={posts} />
    </>
    <>
    <Sidebar/>
    </>
    </ContainerScroll>

  );
