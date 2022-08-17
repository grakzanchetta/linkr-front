import { authApi } from "./api";

export default function getPosts(global, setGlobal, setPosts) {
  const URL = "/relationships/posts";

  const postsPromise = authApi(global.token).get(URL);

  const usersPromise = authApi(global.token).get("/users");

  const promisesArray = [postsPromise, usersPromise];

  if (global.user === null) {
    const USER_URL = `/users/me`;

    const userPromise = authApi(global.token).get(USER_URL);

    promisesArray.push(userPromise);
  }

  Promise.all(promisesArray)
    .then(([resPosts, resUsers, resUser]) => {
      global.users = resUsers.data;

      let posts = [];

      if (resUser !== undefined) setGlobal({ ...global, user: resUser.data });

      for (let follow of resPosts.data) {
        posts = [...posts, ...follow.posts];
      }

      if (resPosts.data.length === 0)
        return setPosts("You don't follow anyone yet. Search for new friends!");

      if (posts.length === 0)
        return setPosts("No posts found from your friends");

      setPosts(posts);
    })
    .catch(() =>
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      )
    );
}
