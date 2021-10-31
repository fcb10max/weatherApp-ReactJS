import styled from "styled-components";

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

const SunriseSunset = () => {
  return (
    <Container>
      <SunCircleWrapper>
        <Circle>
          <Sun />
        </Circle>
      </SunCircleWrapper>
    </Container>
  );
};

export default SunriseSunset;
