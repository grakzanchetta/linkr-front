import HashtagContainer from "./styles"

export default function InnerSidebar({hashtags}){
  console.log("hashtags que chegam no Inner", hashtags)
  return (
    <>
      <HashtagContainer>
        {hashtags.map(hashtag=>{
            <h3>{hashtag.name}</h3>
        })}
      </HashtagContainer>
    </>
  );

}