import { authApi } from "./api";

export default function unfollow(global, id, setLoading, setFollow) {
  const URL = `/relationships/${id}`;

  const promise = authApi(global.token).delete(URL);

  promise
    .then(() => {
      setFollow(false);

      setLoading(false);
    })
    .catch(() => {
      alert("não foi possivel");

      setLoading(false);
    });
}
