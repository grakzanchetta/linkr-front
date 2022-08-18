import { useState } from "react";
import { useGlobal } from "../../../../../context/globalContext";
import InputIcon from "../../../../../components/inputIcon/InputIcon";
import createComment from "../../../../../services/api/createComment";

export default function Form({ postId, setComments }) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { global } = useGlobal();

  const teste = event => {
    event.preventDefault();
    if (loading === true) return;

    setLoading(true);

    const payload = { postId, comment };

    createComment(global, payload, setLoading, setComments);
  };

  return (
    <form onSubmit={teste}>
      <InputIcon value={comment} onChange={setComment} loading={loading} />
    </form>
  );
}
