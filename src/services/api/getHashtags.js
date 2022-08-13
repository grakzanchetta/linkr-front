import { authApi } from "./api";

export default function getHashtags(setHashtags) {
  const URL = "/tophashtags";

  const promise = authApi(global.token).get(URL);

  promise
    .then((response) => {
      const {data} = response
        setHashtags(data)
    })
    .catch(() =>{
      setHashtags([])

      alert(
        "An error occured while trying to fetch the hashtags, please refresh the page"
      )
    }
  
    );
}