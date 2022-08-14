import getHashtags from "../../services/api/getHashtags.js"
import { useEffect } from "react";
import { useState } from "react";
import InnerSidebar from "./InnerSidebar.js";
import { Container, HashtagContainer } from "./styles"


export default function Sidebar({ post }) {

    const [hashtags, setHashtags] = useState([])

    useEffect(()=>{
    getHashtags(setHashtags)
  },[]);
  

  return (

    <Container>
      {typeof hashtags === "string" ? (
        <HashtagContainer><h2> Nenhuma hashtag identificada ainda</h2></HashtagContainer>
      ) : (
        <>
          <InnerSidebar hashtags={hashtags} />
        </>
      )}
    </Container>

  );

}
