import { faCaretLeft, faCaretRight, faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 40px 10px;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
`;
const Button = styled.div`
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ArrowIcon = styled.div`
  width: 50px;
  height: 50px;
  color: black;
  font-size: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s linear;

  :hover {
    background-color: gray;
    transform: scale(1.2);
  }
`
const Items = styled.div`
  overflow-x: hidden;
  margin: 0 10px;
`;
const ItemsWrapper = styled.div`
  display: flex;
  position: relative;
  top: 0;
  right: ${(props) => props.currentPosition + "px"};
  transition: all 0.4s linear;
  z-index: 10;
`;
const Item = styled.div`
  width: 200px;
  margin: 0 40px;
`;
const Hour = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;
const Temp = styled.div`
  font-size: 30px;
`;
const Icon = styled.div`
  font-size: 40px;
`;
const Wind = styled.div`
  font-size: 25px;
`;

const HourlyForecasts = ({ data }) => {

  const [position, setPosition] = useState(0);

  const positionHandler = (buttonSide) => {
    const divWidth = parseInt((document.getElementById("thisElement").scrollWidth / 10))*10;
    const divViewportWidth = parseInt((document.getElementById("thisElement").offsetWidth / 10))*10;;
    if (buttonSide==="left" && position>0) {
      setPosition(position - divWidth* 0.05);
    } else if (buttonSide==="right" && position<=(divWidth - divViewportWidth - 100)) {
      setPosition(position + divWidth * 0.05);
    }
  }

  return (
    <Container>
      <Wrapper>
        <Button>
          <ArrowIcon  onClick={() => positionHandler("left")}><FontAwesomeIcon icon={faCaretLeft} /></ArrowIcon>
        </Button>
        <Items>
          <ItemsWrapper id="thisElement" currentPosition={position}>
            {
              data.map((item) => (
              <Item key={item.id}>
                <Hour key={item.id}>{item.time.substring(item.time.length - 5)}</Hour>
                <Temp key={item.id}>{item.temp_c}°C</Temp>
                <Icon key={item.id}>
                  <img
                    key={item.id}
                    src={item.condition.icon}
                    alt={item.condition.text}
                  />
                </Icon>
                <Wind key={item.id}>{item.wind_dir} - {item.wind_kph + 'km/h'}</Wind>
              </Item>
              ))
            }
          </ItemsWrapper>
        </Items>
        <Button>
          <ArrowIcon  onClick={() => positionHandler("right")}><FontAwesomeIcon icon={faCaretRight} /></ArrowIcon>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default HourlyForecasts;
