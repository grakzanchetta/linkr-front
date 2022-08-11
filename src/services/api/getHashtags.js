import { authApi } from "./api";

export default function getHashtags(setHashtags,global) {
  const URL = "/hashtags";

  const promise = authApi(global.token).get(URL);

  promise
    .then(res => setHashtags(res))
    .catch(() =>
      alert(
        "An error occured while trying to fetch the hashtags, please refresh the page"
      )
    );
}
