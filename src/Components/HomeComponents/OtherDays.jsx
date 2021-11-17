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

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Item = styled.div`
  flex: 1;
  width: 30vw;
  transition: transform 0.3s linear;
  cursor: pointer;
  margin-right: 20px;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 1000px) {
    width: 80vw;
    max-width: 400px;
  }
  `;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: gray;
  height: 400px;
  width: 95%;
  border-radius: 20px;
  margin: 20px 10px;
  
  @media (max-width: 1000px) {
    width: 80vw;
    max-width: 400px;
  }
`;
const DateBlock = styled.div``;
const Condition = styled.div``;
const Icon = styled.div`
  margin-bottom: 30px;
  margin-top: 10px;
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

const OtherDays = ({
  data,
  current,
  setOneDayMoreActive,
  setCurrent,
  setHours,
  setAstro,
}) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateItem = (dateString) => {
    let arr = dateString.split("-");
    let year = arr[0];
    let month = arr[1];
    if (month < 10) month = month.substring(month.length, -1);
    month = months[month - 1];
    let day = arr[2];
    if (day < 10) day = day.substring(1, 2);

    return `${day} ${month} ${year}`;
  };

  return (
    <Container>
      <Wrapper>
        {data.map((item) => (
          <Item
            key={item.id}
            onClick={() => {
              setOneDayMoreActive(true);
              setCurrent(current);
              setHours(item.hour);
              setAstro(item.astro);
            }}
          >
            <ItemWrapper key={item.id}>
              <DateBlock key={item.id}>{dateItem(item.date)}</DateBlock>
              <Condition key={item.id}>{item.day.condition.text}</Condition>
              <Icon key={item.id}>
                <img src={item.day.condition.icon} />
              </Icon>
              <InfoBlock key={item.id}>
                <Info key={item.id}>
                  <span key={item.id}>
                    MIN Temperature: {item.day.mintemp_c}°C
                  </span>
                  <span key={item.id}>
                    MAX Temperature: {item.day.maxtemp_c}°C
                  </span>
                  <span key={item.id}>Humidity: {item.day.avghumidity}%</span>
                  <span key={item.id}>
                    Wind speed: {item.day.maxwind_kph} km/h
                  </span>
                  <span key={item.id}>Ultraviolet index: {item.day.uv}</span>
                  <span key={item.id}>
                    Precipitation amount: {item.day.totalprecip_mm} mm
                  </span>
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
