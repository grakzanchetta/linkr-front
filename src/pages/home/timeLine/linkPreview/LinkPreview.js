import { useEffect, useState } from "react";
import getLinkPreview from "../../../../services/getLinkPreview";
import { LinkContainer, Box } from "./styles";

const getUrl = text => {
  if (!text) return null;

  const a = document.createElement("a");
  a.href = text;

  const { protocol, host, pathname, search, hash } = a;

  const url = `${protocol}//${host}${pathname}${search}${hash}`;

  const isSameHost = host === window.location.host;

  if (isSameHost) return null;

  return url;
};

export default function LinkPreview({ link }) {
  const [previewData, setPreviewData] = useState(0);

  console.log(previewData);

  useEffect(() => {
    const url = getUrl(link);
    if (!url) return null;
    getLinkPreview(url, setPreviewData);
  }, []);

  return previewData === null ? null : (
    <LinkContainer>
      <Box>
        <h6>{previewData.title}</h6>
        <h5>{previewData.description}</h5>
        <h3>{previewData.link}</h3>
      </Box>
      <img src={previewData.image} alt="logo" />
    </LinkContainer>
  );
}
