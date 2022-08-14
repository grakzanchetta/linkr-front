import { authApi } from "./api";

export default function getPostofHashtags(hashtagSearched, setHashtagPosts) {
  const URL = `/hashtag/${hashtagSearched}`;

  const promise = authApi(global.token).get(URL);

  promise
    .then((response) => {
      const {data} = response
      setHashtagPosts(data)
    })
    .catch(() =>{
        setHashtagPosts([])

      alert(
        "An error occured while trying to fetch the hashtags, please refresh the page"
      )
    }
  
    );
}