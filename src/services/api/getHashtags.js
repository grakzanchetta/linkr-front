import { authApi } from "./api";

export default function getHashtags(setHashtags) {
  const URL = "/tophashtags";

  const promise = authApi().get(URL);

  promise
    .then(res => setHashtags(res))
    .catch(() =>
      alert(
        "An error occured while trying to fetch the hashtags, please refresh the page"
      )
    );
}
