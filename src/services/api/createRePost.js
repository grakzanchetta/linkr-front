import { authApi } from "./api";

export default function createRePost(global, id, setIsOpen) {
  const URL = "/rePosts";

  const promise = authApi(global.token).post(URL, { postId: id });

  promise
    .then(res => {
      setIsOpen(false);

      console.log(res);
    })
    .catch(res => {
      setIsOpen(false);

      console.log(res);
    });
}
