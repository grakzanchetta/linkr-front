import { useState } from "react";
import { useGlobal } from "../../context/globalContext";
import { Container, ArrowDown, UserContainer, Menu } from "./styles";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { global } = useGlobal();

  function displayMenu() {
    if (menu === false)
      return { visibility: "hidden", bottom: "-40px", rot: "0deg" };

    return { visibility: "visible", bottom: "-61px", rot: "180deg" };
  }

  return (
    <Container>
      <h1>linkr</h1>
      <UserContainer>
        <ArrowDown onClick={() => setMenu(!menu)} rotate={displayMenu().rot} />
        {hanleImage(global)}
      </UserContainer>
      <Menu visibility={displayMenu().visibility} bottom={displayMenu().bottom}>
        Logout
      </Menu>
    </Container>
  );
}

const hanleImage = global =>
  global.user === null ? "" : <img src={global.user.pictureUrl} alt="User" />;
