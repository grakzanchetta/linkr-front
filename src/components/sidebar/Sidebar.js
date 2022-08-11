import getHashtags from "../../services/api/getHashtags"
import { useGlobal } from "../../context/globalContext";
import { useEffect } from "react";


export default function Sidebar({posts}){

    const [hashtags, setHashtags] = useState([])
    const { global, setGlobal } = useGlobal();
 
    useEffect(()=>{
        getHashtags(setHashtags,global)
    },[posts]);

    return (
        <>
          <Container>
            <h1>timeline</h1>
          </Container>
          {hashtagLoading(hashtags)}
        </>
      );

}

const hashtagLoading = (hashtags) =>
  hashtags === null ? (
    <RotatingLines strokeColor="#ffffff" width="140" />
  ) : (
    <>
  <InnerSidebar hashtags={hashtags}/>
    </>
  );