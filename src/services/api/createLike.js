import { authApi } from "./api";

export default function createLike(global, id, setLike, setLoading, likes) {
  const URL = "/likes";

  const promise = authApi(global.token).post(URL, { postId: id });

  promise
    .then(() => {
      setLoading(prevLoading => !prevLoading);

      likes.push({ id, username: global.user.username });

      setLike(prevLike => !prevLike);
    })
    .catch(err => {
      console.log(err);

      setLoading(prevLoading => !prevLoading);
    });
}
