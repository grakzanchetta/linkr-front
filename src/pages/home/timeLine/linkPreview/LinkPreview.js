import { useEffect, useState } from "react";
import getLinkPreview from "../../../../services/api/getLinkPreview";
import notFound from "../../../../assets/images/404.jpg";
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

  useEffect(() => {
    const url = getUrl(link);
    if (!url) return null;
    getLinkPreview(url, setPreviewData);
  }, []);

  return previewData === null ? null : (
    <LinkContainer onClick={() => openInNewTab(link)}>
      <Box>
        <h6>{previewData.title}</h6>
        <h5>{previewData.description}</h5>
        <h3>{hanleLink(previewData.link, link)}</h3>
      </Box>
      <img src={hanleImage(previewData.image)} alt="logo" />
    </LinkContainer>
  );
}

const hanleImage = image => (image === undefined ? notFound : image);

const hanleLink = (url, link) => (url === undefined ? link : url);

const openInNewTab = url => window.open(url, "_blank", "noopener,noreferrer");
