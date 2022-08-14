import { authApi } from "./api";

export default function getPostofHashtags(hashtag, setHashtagPosts) {
  const URL = `/hashtag/${hashtag}`;

  const promise = authApi().get(URL);
  setHashtagPosts(null);
  promise
    .then(response => {
      const { data } = response;

      setHashtagPosts(data);
    })
    .catch(() => {
      setHashtagPosts([]);
      alert(
        "An error occured while trying to fetch the hashtags, please refresh the page"
      );
    });
}
