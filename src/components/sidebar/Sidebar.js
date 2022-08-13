import getHashtags from "../../services/api/getHashtags.js"
import { useGlobal } from "../../context/globalContext.js";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from "react";
import { useState } from "react";
import InnerSidebar from "./InnerSidebar.js";
import { Container, HashtagContainer } from "./styles"
import { authApi } from "../../services/api/api.js";

export default function Sidebar({ post }) {

    const [hashtags, setHashtags] = useState([])
    const URL = "/tophashtags";

    const promise = authApi(global.token).get(URL);

    useEffect(()=>{
    getHashtags(setHashtags)
  },[]);
  

  return (

    <Container>
      {hashtags.lenght <1? (
        <HashtagContainer><h2> Nenhuma hashtag identificada ainda</h2></HashtagContainer>
      ) : (
        <>
          <InnerSidebar hashtags={hashtags} />
        </>
      )}
    </Container>

  );

}
