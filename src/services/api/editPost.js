import { authApi } from "./api";

function editPost(global, payload, setEdit, setLoading, setComment, postText) {
  const URL = "/posts";

  const promise = authApi(global.token).patch(URL, payload);

  promise
    .then(() => {
      postText.current = payload.postText;

      setComment(payload.postText);

      setLoading(false);

      setEdit(false);
    })
    .catch(() => {
      setLoading(false);

      alert("Unable to update post");
    });
}

export default editPost;
