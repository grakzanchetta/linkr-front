import { authApi } from "./api";
import getPosts from "./getPosts";

export default function createPost(global, payload, postsAux) {
  const URL = "/posts";

  const { posts, setPosts } = postsAux;

  const postsBackUp = posts;

  setPosts(null);

  const promise = authApi(global.token).post(URL, payload);

  promise
    .then(() => {
      getPosts(global, null, setPosts);
    })
    .catch(res => {
      setPosts(postsBackUp);

      alert("Houve um erro ao publicar seu link");
    });
}
