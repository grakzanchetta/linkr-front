import { authApi } from "./api";
import getPosts from "./getPosts";

export default function createPost(global, payload, setLoading, postsAux) {
  const URL = "/posts";

  const { posts, setPosts } = postsAux;

  const postsBackUp = posts;

  setPosts(null);

  const promise = authApi(global.token).post(URL, payload);

  promise
    .then(res => {
      getPosts(global, null, setPosts);

      setLoading(false);
      console.log(res);
    })
    .catch(res => {
      setPosts(postsBackUp);

      setLoading(false);
      alert("Houve um erro ao publicar seu link");
    });
}
