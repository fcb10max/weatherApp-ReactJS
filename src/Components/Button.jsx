import styled from "styled-components"

const Container = styled.div`
  button {
    background-color: gray;
    padding: 15px 40px;
    font-size: 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s linear;

    :hover {
      background-color: rgba(0,0,0,0.5);
      color: gray;
      transform: scale(1.1);
    }
  }
`

const Button = ({onClickEvent, text}) => {
  return (
    <Container>
      <button onClick={()=>onClickEvent(true)}>{text}</button>
    </Container>
  )
}

export default Button
