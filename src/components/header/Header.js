import { useState } from 'react'
import userPicture from '../../assets/images/image 3.svg'
import { Container, ArrowDown, UserContainer, Menu } from './styles'

export default function Header() {
  const [menu, setMenu] = useState(false)

  function displayMenu() {
    if (menu === false)
      return { visibility: 'hidden', bottom: '-40px', rot: '0deg' }

    return { visibility: 'visible', bottom: '-61px', rot: '180deg' }
  }

  return (
    <Container>
      <h1>linkr</h1>
      <UserContainer>
        <ArrowDown onClick={() => setMenu(!menu)} rotate={displayMenu().rot} />
        <img src={userPicture} alt="User" />
      </UserContainer>
      <Menu visibility={displayMenu().visibility} bottom={displayMenu().bottom}>
        Logout
      </Menu>
    </Container>
  )
}
