import getHashtags from "../../services/api/getHashtags.js"
import { useGlobal } from "../../context/globalContext.js";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from "react";
import { Container } from ".styles.js";
import { authApi } from "../../services/api";
import InnerSidebar from "./InnerSidebar.js";

export default function Sidebar(){

    const [hashtags, setHashtags] = useState()
    const URL = "/tophashtags";
 
    useEffect(()=>{
        const promise = authApi().get(URL);

        promise
          .then(({hash}) => {
              const { name } = hash;
      
              setHashtags(name);
          })
          .catch(() =>
            alert(
              "An error occured while trying to fetch the hashtags, please refresh the page"
            )
          )
    },[]);


    // const hash =     [
    //     {
    //       "name": "CODANDO",
    //       "visualizations": "11"
    //     },
    //     {
    //       "name": "#agora2",
    //       "visualizations": "8"
    //     },
    //     {
    //       "name": "#bem2",
    //       "visualizations": "6"
    //     },
    //     {
    //       "name": "#agora3",
    //       "visualizations": "6"
    //     },
    //     {
    //       "name": "#jah2",
    //       "visualizations": "6"
    //     },
    //     {
    //       "name": "#buda2",
    //       "visualizations": "6"
    //     },
    //     {
    //       "name": "#deus2",
    //       "visualizations": "6"
    //     },
    //     {
    //       "name": "#bem3",
    //       "visualizations": "4"
    //     },
    //     {
    //       "name": "#jah3",
    //       "visualizations": "4"
    //     },
    //     {
    //       "name": "SABADOU",
    //       "visualizations": "4"
    //     }
    //   ]

    // const hashtags =hash 
    // console.log("no sidebar",hashtags)

    return (

          <Container>
          {hashtagLoading(hashtags)}
          </Container>
   
      );

}

const hashtagLoading = (hashtags) =>
  hashtags === null ? (
    <h3> Nenhuma hashtag identificada ainda</h3>
  ) : (
    <>
  <InnerSidebar hashtags={hashtags}/>
    </>
  );