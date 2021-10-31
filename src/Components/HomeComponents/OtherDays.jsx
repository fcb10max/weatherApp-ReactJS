import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vh 0;
`;
const Wrapper = styled.div`
  max-width: 1280px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
  flex: 1;
  min-width: 250px;
  width: 20vw;
  margin: 0 5%;
  transition: transform 0.3s linear;

  :hover {
    transform: scale(1.1);
  }
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
  min-height: 400px;
  width: 90%;
  border-radius: 20px;
  margin: 20px 10px;
`;
const DateBlock = styled.div``;
const Condition = styled.div``;
const Icon = styled.div`
  margin: 30px 0;
  border-bottom: 2px solid darkgray;
  width: 100%;
`;
const InfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    width: 90%;
    margin: 5px 0;
    font-size: 19px;
    border-bottom: 2px solid darkgray;
    padding-bottom: 5px;

    :last-child {
      border-bottom: none;
    }
  }
  `;

const OtherDays = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        {data.map((item) => (
          <Item key={item.id}>
            <ItemWrapper key={item.id}>
              <DateBlock key={item.id}>{item.date}</DateBlock>
              <Condition key={item.id}>{item.day.condition.text}</Condition>
              <Icon key={item.id}><img src={item.day.condition.icon} /></Icon>
              <InfoBlock key={item.id}>
                <Info key={item.id}>
                  <span key={item.id}>MIN Temperature: {item.day.mintemp_c}°C</span>
                  <span key={item.id}>MAX Temperature: {item.day.maxtemp_c}°C</span>
                  <span key={item.id}>Humidity: {item.day.avghumidity}%</span>
                  <span key={item.id}>Wind speed: {item.day.maxwind_kph}km/h</span>
                  <span key={item.id}>Ultraviolet index: {item.day.uv}</span>
                  <span key={item.id}>Precipitation amount: {item.day.totalprecip_mm}mm</span>
                </Info>
              </InfoBlock>
            </ItemWrapper>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default OtherDays;
