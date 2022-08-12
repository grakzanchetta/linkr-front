import { useState } from "react";
import User from "../user/User";
import LinkPreview from "../linkPreview/LinkPreview";
import Dialog from "./Dialog";
import { Container, UserContainer, Trash } from "./styles";

export default function Post({ data, posts, setPosts, index }) {
  const { id, username, pictureUrl, postUrl, postText, likes, isAuthor } = data;
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <User picture={pictureUrl} likes={likes} id={id} index={index} />
      <UserContainer>
        <span>
          <h2>{username}</h2>
          {DeleteAndEdit(isAuthor, setIsOpen)}
        </span>
        <h3>{postText}</h3>
        <LinkPreview link={postUrl} />
        <Dialog
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          posts={posts}
          setPosts={setPosts}
          id={id}
        />
      </UserContainer>
    </Container>
  );
}

const DeleteAndEdit = (isAuthor, setIsOpen) =>
  isAuthor === true ? <Trash onClick={() => setIsOpen(true)} /> : null;
