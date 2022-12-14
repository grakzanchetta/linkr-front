import { useState, useRef, useEffect } from "react";
import { useGlobal } from "../../../../context/globalContext";
import User from "../user/User";
import LinkPreview from "../linkPreview/LinkPreview";
import Dialog from "./Dialog";
import Input from "../../../../components/input/Input";
import editPost from "../../../../services/api/editPost";
import { Container, UserContainer, Trash, Box, tagStyle } from "./styles";
import { mentionStyle, RePost, Retweet } from "./styles";
import Comments from "../comments/main/Comments";
import { IconsContainer, Pencil } from "./styles";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";

export default function Post({ data, hashtagPosts, setHashtagPosts, index }) {
  let { id, userId, username, pictureUrl, postUrl, likes, isAuthor } = data;
  const { title, image, description, rePostCount } = data;
  const postText = useRef(data.postText);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [comment, setComment] = useState(
    postText.current === null ? "" : postText.current
  );
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const { global } = useGlobal();
  const inputRef = useRef(null);
  const [commentsBox, setCommentsBox] = useState(false);
  const [comments, setComments] = useState(data.comments);
  const navigate = useNavigate();

  function sendToHashPage(hash) {
    hash = hash.slice(1);
    navigate(`/hashtag/${hash}`);
  }

  useEffect(() => {
    if (edit === true) {
      inputRef.current?.focus();
    }
  }, [edit]);

  function key(event) {
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
    if (edit === false)
      return (
        <ReactTagify
          tagStyle={tagStyle}
          mentionStyle={mentionStyle}
          tagClicked={tag => sendToHashPage(tag)}
        >
          <h3>{postText.current}</h3>
        </ReactTagify>
      );

    return (
      <Input
        onKeyUp={key}
        reference={inputRef}
        value={comment}
        onChange={setComment}
        height="auto"
        padding="4px 9px"
        loading={loading}
        font='normal 400 16px "Lato", sans-serif'
        color="#4C4C4C"
      />
    );
  }

  const DeleteAndEdit = () =>
    userId === global.user.id ? (
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
    <Box>
      <Container>
        <User
          picture={pictureUrl}
          likes={likes}
          id={id}
          index={index}
          userId={userId}
          num={comments?.length}
          setComments={setCommentsBox}
          rePost={rePostCount}
          setModal={setModal}
        />
        <UserContainer>
          <span>
            <h2>{username}</h2>
            {DeleteAndEdit()}
          </span>
          {hanleComment()}
          <LinkPreview
            url={postUrl}
            image={image}
            description={description}
            title={title}
          />
          <Dialog
            modalIsOpen={modal}
            setIsOpen={setModal}
            hashtagPosts={hashtagPosts}
            setHashtagPosts={setHashtagPosts}
            id={id}
            msg="Do you want to re-post
            this link?"
          />
          <Dialog
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            hashtagPosts={hashtagPosts}
            setHashtagPosts={setHashtagPosts}
            id={id}
          />
        </UserContainer>
      </Container>
      <Comments
        commentsBox={commentsBox}
        postId={id}
        comments={comments}
        setComments={setComments}
      />
    </Box>
  );
}
