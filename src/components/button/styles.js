import styled from 'styled-components'

const Container = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: none;
  border-radius: ${props => props.borderRadius};
  font: ${props => props.font};
  opacity: ${props => props.opacity};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export { Container }
