import PageContainer from "../../containers/page/Page";
import Header from "../../components/header/Header";
import TimeLine from "./timeLine/main/TimeLine";

export default function Home() {
  return (
    <PageContainer>
      <Header />
      <TimeLine />
    </PageContainer>
  );
}
