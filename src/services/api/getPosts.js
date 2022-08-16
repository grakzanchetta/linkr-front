import { authApi } from "./api";

export default function getPosts(global, setGlobal, setPosts) {
  const URL = "/posts";

  const postsPromise = authApi(global.token).get(URL);

  const usersPromise = authApi(global.token).get("/users");

  Promise.all([postsPromise, usersPromise])
    .then(([resPosts, resUsers]) => {
      global.users = resUsers.data;

      const { id, username, pictureUrl, posts } = resPosts.data;

      if (global.user === null && setGlobal !== null) {
        setGlobal({ ...global, user: { id, username, pictureUrl } });
      }

      setPosts(posts);
    })
    .catch(() =>
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      )
    );
}
