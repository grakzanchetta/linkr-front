import HashtagContainer from "./styles"

export default function InnerSidebar({hashtags}){
  console.log(hashtags)
  return (
    <>
      <HashtagContainer>
        {hashtags.map(hashtag=>{
            <h3>hashtag</h3>
        })}
      </HashtagContainer>
    </>
  );

}