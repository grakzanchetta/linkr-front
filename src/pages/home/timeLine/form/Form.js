import { useState } from "react";
import { useGlobal } from "../../../../context/globalContext";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import User from "../user/User";
import createPost from "../../../../services/api/createPost";
import { Container, FormContainer } from "./styles";

export default function Form({ posts, setPosts }) {
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { global } = useGlobal();

  function submit(event) {
    event.preventDefault();

    if (loading === true) return;

    setLoading(true);

    const payload = { postUrl: url, postText: comment };

    const postsAux = { posts, setPosts };

    createPost(global, payload, postsAux);
  }

  return (
    <Container>
      <User picture={global.user.pictureUrl} />
      <FormContainer onSubmit={submit}>
        <h6>What are you going to share today?</h6>
        <Input
          width="34.93vw"
          height="30px"
          backGround="#EFEFEF"
          borderRadius="5px"
          placeholder="http://..."
          type="url"
          value={url}
          onChange={setUrl}
        />
        <Input
          width="34.93vw"
          height="66px"
          backGround="#EFEFEF"
          borderRadius="5px"
          placeholder="Awesome article about #javascript"
          value={comment}
          onChange={setComment}
          required={false}
        />
        <span>
          <Button
            name="Publish"
            loading={loading}
            nameLoading="Publishing..."
            width="7.77vw"
            height="31px"
            borderRadius="5px"
            font="normal 700 14px 'Lato', sans-serif"
          />
        </span>
      </FormContainer>
    </Container>
  );
}
