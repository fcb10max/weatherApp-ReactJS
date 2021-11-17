import styled from "styled-components"

const Container = styled.div`
  border-top: 3px solid black;
  padding: 40px 0;
`;
const Wrapper = styled.div`
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

`;
const InfoBox = styled.div`
  font-size: 25px;
  width: 50%;
  height: 30px;

  :nth-child(2) {
    border-top: 2px solid rgba(0,0,0,0.4);
    border-bottom: 2px solid rgba(0,0,0,0.4);
    margin: 20px 0;
    padding: 20px 0;
  }

  @media (max-width: 700px) {
    font-size: 20px;
    width: 80%;
  }

`;

const AdditionalInfo = ({data}) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <InfoBox>Feels like: {data.feelslike_c} °C</InfoBox>
          <InfoBox>Humidity: {data.humidity}</InfoBox>
          <InfoBox>UV Index: {data.uv}</InfoBox>
        </Left>
        <Right>
          <InfoBox>Wind direction: {data.wind_dir}</InfoBox>
          <InfoBox>Wind speed: {data.wind_kph} km/h</InfoBox>
          <InfoBox>Pressure: {data.pressure_mb} mmHg</InfoBox>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default AdditionalInfo
