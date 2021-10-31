import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  padding: 50px 0;
  font-weight: 300;
  display: flex;
  justify-content: center;
  color: #fff;
`;
const Wrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Top = styled.div``;
const CityTitle = styled.div`
  width: fit-content;
  font-size: 70px;
`;
const Bottom = styled.div`
  width: fit-content;
  display: flex;
`;
const CurrentTempContainer = styled.div`
  padding: 50px 0;
`;
const CurrentTempNum = styled.div`
  font-size: 90px;
`;
const CurrentTempDesc = styled.div`
  font-size: 30px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CurrentAirQty = styled.div`
  font-size: 20px;
  width: fit-content;
  margin: 0 auto;
`;

const BriefData = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <CityTitle>{data.location.name}</CityTitle>
          {/* <CityTitle>London</CityTitle> */}
        </Top>
        <Bottom>
          <CurrentTempContainer>
            <CurrentTempNum>
              <span>{data.current.temp_c}°C</span>
              {/* <span>20°C</span> */}
            </CurrentTempNum>
            <CurrentTempDesc>
              <img alt="icon" src={data.current.condition.icon}></img>
              {data.current.condition.text}
              Cloudy
            </CurrentTempDesc>
            <CurrentAirQty
              title="1 means Good
              2 means Moderate
              3 means Unhealthy for sensitive group
              4 means Unhealthy
              5 means Very Unhealthy
              6 means Hazardous"
            >
              Air Quality: {data.current.air_quality["us-epa-index"]}
              {/* Air Quality: 1 */}
            </CurrentAirQty>
          </CurrentTempContainer>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default BriefData;
