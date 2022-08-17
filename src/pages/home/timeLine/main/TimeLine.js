import { useEffect, useState } from "react";
import { useGlobal } from "../../../../context/globalContext";
import Form from "../form/Form";
import Posts from "../posts/Posts";
import getPosts from "../../../../services/api/getPosts";
import { RotatingLines } from "react-loader-spinner";
import { Container, ContainerScroll, FeedContainer } from "./styles";
import Sidebar from "../../../../components/sidebar/Sidebar.js";
import useInterval from 'use-interval'
import InfiniteScroll from 'react-infinite-scroller';

export default function TimeLine() {
  const [posts, setPosts] = useState(null);
  const { global, setGlobal } = useGlobal();
  const [lastPostTime, setLastPostTime] = useState();
  const [newPosts, setNewPosts] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    global.token = token;
    getPosts(global, setGlobal, setPosts);
  }, []);


  function getNewPosts() {
    console.log('console 02: getting more posts')
    getPosts(global, setGlobal, setPosts)
        .then(res => verifyNewPosts(res))
        .catch(error => console.log(error))
        console.log()
}

function verifyNewPosts(res) {
    const incomingPosts = res.data;

    const areAnyNew = incomingPosts.filter(post => post.time > lastPostTime);

    if (areAnyNew) {
        areAnyNew.length > 0 && setLastPostTime(areAnyNew[areAnyNew.length - 1]?.time);
        setNewPosts((newPosts.concat(areAnyNew).reverse()));
    }
    return
}

useInterval(getNewPosts, 3000);
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
    <>
      <ContainerScroll>
        <FeedContainer>
          <Form posts={posts} setPosts={setPosts} />
           <InfiniteScroll>
          <Posts posts={posts} setPosts={setPosts} />
          </InfiniteScroll>
        </FeedContainer>
        <Sidebar />
      </ContainerScroll>
    </>
  );
