import { authApi } from "./api";
import logout from "../../utils/logout";

function getPostofHashtags(global, hashtag, setHashtagPosts, navigate) {
  setHashtagPosts(null);

  const URL = `/hashtag/${hashtag}`;

  const promise = authApi(global.token).get(URL);

  const usersPromise = authApi(global.token)("/users");

  const promisesArray = [promise, usersPromise];

  if (global.user === null) {
    const USER_URL = `/users/me`;

    const userPromise = authApi(global.token).get(USER_URL);

    promisesArray.push(userPromise);
  }

  Promise.all(promisesArray)
    .then(([resPosts, resUsers, resUser]) => {
      global.users = resUsers.data;

      if (resUser !== undefined) global.user = resUser.data;

      setHashtagPosts(resPosts.data);
    })
    .catch(() => {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );

      logout(global, navigate);
    });
}

export default getPostofHashtags;
