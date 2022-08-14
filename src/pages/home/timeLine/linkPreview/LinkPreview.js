import NOT_FOUND from "../../../../assets/images/404.jpg";
import { LinkContainer, Box } from "./styles";

export default function LinkPreview({ url, title, description, image }) {
  return (
    <LinkContainer onClick={() => openInNewTab(url)}>
      <Box>
        <h6>{title}</h6>
        <h5>{description}</h5>
        <h3>{url}</h3>
      </Box>
      <img src={image} onError={e => (e.target.src = NOT_FOUND)} alt="logo" />
    </LinkContainer>
  );
}

const openInNewTab = url => window.open(url, "_blank", "noopener,noreferrer");
