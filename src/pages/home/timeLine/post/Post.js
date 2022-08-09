import User from '../user/User'
import LinkPreview from '../linkPreview/LinkPreview'
import { Container, UserContainer } from './styles'

export default function Post({ picture }) {
  return (
    <Container>
      <User picture={picture} />
      <UserContainer>
        <h2>Juvenal Juvêncio </h2>
        <h3>
          Muito maneiro esse tutorial de Material UI com React, deem uma olhada!
        </h3>
        <LinkPreview />
      </UserContainer>
    </Container>
  )
}
