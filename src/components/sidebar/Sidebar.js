import getHashtags from "../../services/api/getHashtags"
import { useGlobal } from "../../context/globalContext";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from "react";
import { Container } from "./styles";


export default function Sidebar({posts}){

    // const [hashtags, setHashtags] = useState([])
    const { global, setGlobal } = useGlobal();
 
    // useEffect(()=>{
    //     getHashtags(setHashtags,global)
    // },[posts]);

    const hashtags = ["#ola", "#sabadou", "react", "#codar"]
console.log(hashtags)
    return (

          <Container>
          {hashtagLoading}
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