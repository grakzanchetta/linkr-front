import Form from '../form/Form'
import Posts from '../posts/Posts'
import { Container } from './styles'
import userPicture from '../../../../assets/images/image 3.svg'

export default function TimeLine() {
  return (
    <Container>
      <h1>timeline</h1>
      <Form picture={userPicture} />
      <Posts picture={userPicture} />
    </Container>
  )
}
