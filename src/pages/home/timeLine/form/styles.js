import styled from 'styled-components'

const Container = styled.div`
  width: 42.43vw;
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 29px;
`

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h6 {
    font: normal 300 20px 'Lato', sans-serif;
    color: #707070;
    padding-bottom: 10px;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`

export { Container, FormContainer }
