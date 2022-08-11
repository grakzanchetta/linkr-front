export default function Sidebar({hashtags}){return (
    <>
      <Container>
        {hashtags.map(hashtag=>{
            <h3>hashtag</h3>
        })}
      </Container>
    </>
  );

}