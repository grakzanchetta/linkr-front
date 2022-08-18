import { authApi } from "./api";

function createComment(global, payload, setLoading, setComments) {
  const URL = "/comments";

  const promise = authApi(global.token).post(URL, payload);

  promise
    .then(() => {
      setLoading(false);

      const { comment } = payload;

      const { username, pictureUrl } = global.user;

      const aux = { username, pictureUrl, comment };

      setComments(prev => [...prev, aux]);
    })
    .catch(res => {
      setLoading(false);

      console.log(res);
    });
}

export default createComment;
