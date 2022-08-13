// import { useNavigate } from "react-router-dom";
// import { authApi } from "./api";

// export default function hashtagRedirect(hashtag){

//     const navigate = useNavigate

//     const postsOfHashtag = []

//     const URL = `/hashtag/${hashtag}`;

//     const promise = authApi(global.token).get(URL);

//     promise
//       .then((response) => {
     
  
//         postsOfHashtag = response.data
//       })
//       .catch(() =>{
//         postsOfHashtag = []
  
//         alert(
//           "An error occured while trying to fetch the hashtags, please refresh the page"
//         )
//       }
    
//       );

//     navigate(`/hashtag/${hashtag}`)

//     return postsOfHashtag
// }
