import { useState } from "react";
import Input from "../../../../components/input/Input";
import Button from "../../../../components/button/Button";
import User from "../user/User";
import { Container, FormContainer } from "./styles";

export default function Form({ picture }) {
  const [url, setUrl] = useState("");
  const [comment, setComment] = useState("");

  function submit(event) {
    event.preventDefault();

    console.log({ url, comment });
  }

  return (
    <Container>
      <User picture={picture} />
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
