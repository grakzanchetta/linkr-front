import { authApi } from "./api";

export default function deleteLike(global, id, setLike, setLoading, likes) {
  const URL = `/likes/${id}`;

  const promise = authApi(global.token).delete(URL);

  promise
    .then(() => {
      setLoading(prevLoading => !prevLoading);

      likes.splice(likes.map(like => like.id).indexOf(id), 1);

      setLike(prevLike => !prevLike);
    })
    .catch(err => {
      console.log(err);

      setLoading(prevLoading => !prevLoading);
    });
}
