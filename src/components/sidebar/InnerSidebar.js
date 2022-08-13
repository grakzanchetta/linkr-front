import {HashtagContainer, Linha }from "./styles"
import hashtagRedirect from "../../services/api/hashtagRedirect";

export default function InnerSidebar({hashtags}){
  console.log("hashtags que chegam no Inner", hashtags)
  return (
    <>
      <HashtagContainer>
        <h1>trending</h1>
        <Linha></Linha>
        {hashtags.map((hashtag)=><h2>{hashtag.name}</h2>)}
        {/* {hashtags.map((hashtag)=><h2 onClick={(hashtag)=> hashtagRedirect(hashtag)}>{hashtag.name}</h2>)} */}
      </HashtagContainer>
    </>
  );

}