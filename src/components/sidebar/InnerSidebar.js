import { HashtagContainer, Linha } from "./styles"
import hashtagRedirect from "../../services/api/getPostofHashtags";
import {useNavigate }from "react-router-dom";


export default function InnerSidebar({ hashtags }) {
  
  const navigate = useNavigate()
  return (
    <>
      <HashtagContainer>
        <h1>trending</h1>
        <Linha></Linha>
        {hashtags.map(({name}) => <h2 onClick={()=>navigate(`/hashtag/${name}`)}>{name}</h2>)}
      </HashtagContainer>
    </>
  );

}