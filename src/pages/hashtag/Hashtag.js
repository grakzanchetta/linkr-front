
import PageContainer from "../../containers/page/Page";
import Header from "../../components/header/Header";
import TimeLine from "./timeLine/main/TimeLine";
import { useParams } from "react-router-dom";


export default function HashtagSearch(){

    const { hashtag } = useParams();

    console.log(hashtag)

      return (
        <PageContainer>
          <Header />
          <TimeLine hashtag={hashtag}/>
        </PageContainer>
      );
    }
