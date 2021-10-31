import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import SunriseSunset from "./SunriseSunset";
import HourlyForecasts from "./HourlyForecasts";
import AdditionalInfo from "./AdditionalInfo";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: ${(props) => props.posY + "px"};
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const InfoContainer = styled.div`
  max-height: ${(props) => props.heightValue + "px"};
  width: 90vw;
  height: 90vh;
  background-color: white;
  border-radius: 20px;
  position: relative;
`;
const Icon = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: none;
  font-size: 40px;
  color: black;
  position: absolute;
  right: 2vw;
  top: 2vh;
  cursor: pointer;

  :hover {
    transform: scale(1.2);
  }
`;
const Content = styled.div`
  max-height: 80vh;
  height: 85%;
  overflow: auto;
  margin: 30px;
  margin-top: calc(3vw + 40px);
  `;
const ContentWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`;

const OneDayMore = ({ active, setActive, data }) => {
  const [posY, setPosY] = useState(window.pageYOffset);

  console.log(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setPosY(window.pageYOffset);
  };

  return (
    <Container active={active} posY={posY}>
      <Wrapper>
        <InfoContainer heightValue={window.innerHeight * 0.9}>
          <Icon onClick={() => setActive(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </Icon>
          <Content>
            <ContentWrapper>
              <SunriseSunset />
              <HourlyForecasts data={data.forecast.forecastday[0].hour} />
              <AdditionalInfo data={data.current} />
            </ContentWrapper>
          </Content>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default OneDayMore;
