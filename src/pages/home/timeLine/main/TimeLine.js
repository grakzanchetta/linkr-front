import Form from "../form/Form";
import Posts from "../posts/Posts";
import { Container } from "./styles";
import userPicture from "../../../../assets/images/image 3.svg";

const links = [
  {
    url: "https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react"
  },
  {
    url: "https://bootcampra.notion.site/Projeto-17-Linkr-a135fca732e04f67ade8d110c717dc73"
  },
  {
    url: "https://www.figma.com/file/otZek3I6SCoTJvz4DubYec/T6-%7C-Projet%C3%A3o%3A-Linkr---Rede-Social-de-Links-(Copy)?node-id=655%3A2"
  },
  {
    url: "https://bootcampra.notion.site/Ter-05-07-Branches-e-Pull-Requests-761397a0b33d4d228132f2364e2884bf"
  }
];

export default function TimeLine() {
  return (
    <>
      <Container>
        <h1>timeline</h1>
      </Container>
      <Form picture={userPicture} />
      <Posts picture={userPicture} links={links} />
    </>
  );
}
