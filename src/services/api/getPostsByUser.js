import { authApi, api } from "./api";
import logout from "../../utils/logout";

function getPostsByUser(global, id, setPosts, navigate) {
  const POSTS_URL = `/posts/user/${id}`;

  const postPromise = authApi(global.token).get(POSTS_URL);

  const usersPromise = api.get("/users");

  const promisesArray = [postPromise, usersPromise];

  if (global.user === null) {
    const USER_URL = `/users/me`;

    const userPromise = authApi(global.token).get(USER_URL);

    promisesArray.push(userPromise);
  }

  Promise.all(promisesArray)
    .then(([resPosts, resUsers, resUser]) => {
      global.users = resUsers.data;

      if (resUser !== undefined) global.user = resUser.data;

      setPosts(resPosts.data);
    })
    .catch(() => {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );

      logout(global, navigate);
    });
}

export default getPostsByUser;
