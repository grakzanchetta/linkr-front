import { authApi } from "./api";

export default function getPosts(global, setGlobal, setPosts) {
  const URL = "/posts";

  const promise = authApi(global.token).get(URL);

  promise
    .then(({ data }) => {
      const { id, username, pictureUrl, posts } = data;

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
