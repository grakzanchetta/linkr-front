import { authApi } from "./api";

function deletePost(id, global, posts, setPosts) {
  const postsBackUp = posts;

  setPosts(null);

  const URL = `/posts/${id}`;

  const promise = authApi(global.token).delete(URL);

  promise
    .then(() => {
      setPosts(postsBackUp.filter(post => post.id !== id));
    })
    .catch(() => {
      setPosts(postsBackUp);

      alert("could not delete post, please try later");
    });
}

export default deletePost;
