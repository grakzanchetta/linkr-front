import { useState, useRef, useEffect } from "react";
import { useGlobal } from "../../../../context/globalContext";
import User from "../user/User";
import LinkPreview from "../linkPreview/LinkPreview";
import Dialog from "./Dialog";
import Input from "../../../../components/input/Input";
import editPost from "../../../../services/api/editPost";
import { Container, UserContainer, Trash } from "./styles";
import { IconsContainer, Pencil } from "./styles";

export default function Post({ data, posts, setPosts, index }) {
  let { id, userId, username, pictureUrl, postUrl, likes, isAuthor } = data;
  const postText = useRef(data.postText);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState(
    postText.current === null ? "" : postText.current
  );
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const { global } = useGlobal();
  const inputRef = useRef(null);

  useEffect(() => {
    if (edit === true) {
      inputRef.current?.focus();
    }
  }, [edit]);

  function teste(event) {
    switch (event.key) {
      case "Enter":
        if (loading === true) return;
        setLoading(true);

        const payload = { postId: id, postText: comment };

        editPost(global, payload, setEdit, setLoading, setComment, postText);
        return;

      case "Escape":
        hanleEdit();
        return;

      default:
        break;
    }
  }

  function hanleComment() {
    if (edit === false) return <h3>{postText.current}</h3>;

    return (
      <Input
        eventKey={teste}
        reference={inputRef}
        value={comment}
        onChange={setComment}
        height="auto"
        padding="4px 9px"
        loading={loading}
      />
    );
  }

  const DeleteAndEdit = () =>
    isAuthor === true ? (
      <IconsContainer>
        <Trash onClick={() => setIsOpen(true)} />
        <Pencil onClick={() => hanleEdit(edit, setEdit, setComment)} />
      </IconsContainer>
    ) : null;

  function hanleEdit() {
    setEdit(prev => !prev);

    if (edit === true) setComment(postText);
  }

  return (
    <Container>
      <User
        picture={pictureUrl}
        likes={likes}
        id={id}
        index={index}
        userId={userId}
      />
      <UserContainer>
        <span>
          <h2>{username}</h2>
          {DeleteAndEdit()}
        </span>
        {hanleComment()}
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
