import { HashtagContainer, Linha } from "./styles";
import { useNavigate } from "react-router-dom";

export default function InnerSidebar({ hashtags }) {
  const navigate = useNavigate();

  function treathash(name) {
    const hashname = name.slice(1);
    navigate(`/hashtag/${hashname}`);
  }

  return (
    <>
      <HashtagContainer>
        <h1>trending</h1>
        <Linha></Linha>
        {hashtags.map(({ name }, index) => (
          <h2 onClick={() => treathash(name)} key={index}>
            {name}
          </h2>
        ))}
      </HashtagContainer>
    </>
  );
}
