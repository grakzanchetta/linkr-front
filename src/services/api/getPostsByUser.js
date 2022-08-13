import { authApi } from "./api";

function getPostsByUser(global, id, setPosts) {
  const URL = `/posts/user/${id}`;

  const promise = authApi(global.token).get(URL);

  promise
    .then(({ data }) => {
      setPosts(data);
    })
    .catch(error => {
      console.log(error);
    });
}

export default getPostsByUser;
