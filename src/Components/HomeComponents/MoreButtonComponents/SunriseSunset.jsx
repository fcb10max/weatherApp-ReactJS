import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Container = styled.div`
  background-image: url("https://i.ibb.co/LYdDpcR/pexels-neale-lasalle-631477-1.jpg");
  //https://i.ibb.co/YpsFxSJ/pexels-jahoo-clouseau-388415-2.jpg day
  //https://i.ibb.co/LYdDpcR/pexels-neale-lasalle-631477-1.jpg night
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  border-radius: 20px;
`;
const SunCircleWrapper = styled.div`
  border-radius: 50%;
  padding-top: 20px;
  overflow: hidden;
  max-width: 1280px;
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Circle = styled.div`
  max-width: 1200px;
  max-height: 1200px;
  height: 80vw;
  width: 80vw;
  border: 4px solid white;
  border-radius: 50%;
  transform: rotate(45deg);
  box-sizing: border-box;

  @media (max-width: 600px) {
    position: relative;
    top: 50px;
  }
  @media (max-width: 400px) {
    margin: 0 !important;
    position: relative;
    top: 100px;
  }
`;
const Sun = styled.div`
  width: 40px;
  height: 40px;
  background-color: orange;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: -20px;
`;
const AstroTimesContainer = styled.div`
  width: 90%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
`;
const SunriseTime = styled.div``;
const SunsetTime = styled.div``;

const SunriseSunset = ({ data, day }) => {

  const ymd = day.time.substring(0,10).split('-');
  const SRhms = [data.sunrise.substring(0,2), data.sunrise.substring(3,5), data.sunrise.substring(6,8)];
  const SShms = [data.sunset.substring(0,2), data.sunrise.substring(3,5), data.sunrise.substring(6,8)];

  if (SRhms[2]==="PM") SRhms[0]=SRhms[0]+12;
  if (SShms[2]==="PM") SShms[0]=SShms[0]+12;

  const SR = new Date(Date.UTC(ymd[0],ymd[1],ymd[2],SRhms[0],SRhms[1]));
  const SS = new Date(Date.UTC(ymd[0],ymd[1],ymd[2],SShms[0],SShms[1]));
  
  const sunriseTime = (SR.getTime()/1000);
  const sunsetTime = (SS.getTime()/1000);

  const dayLength = sunriseTime - sunsetTime;
  const now = Math.round((new Date()).getTime() / 1000);

  return (
    <Wrapper>
      <Container>
        <SunCircleWrapper>
          <Circle>
            <Sun />
          </Circle>
        </SunCircleWrapper>
      </Container>
        <AstroTimesContainer>
          <SunriseTime>Sunrise: {data.sunrise}</SunriseTime>
          <SunsetTime>Sunset: {data.sunset}</SunsetTime>
        </AstroTimesContainer>
    </Wrapper>
  );
};

export default SunriseSunset;
