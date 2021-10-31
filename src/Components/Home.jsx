import styled from "styled-components";
import BriefData from "./HomeComponents/BriefData";
import Navbar from "./Navbar";
import { useDataFetch } from "../hooks/useDataFetch";
import Loading from "./HomeComponents/Loading";
import Button from "./Button";
import OneDayMore from "./HomeComponents/MoreButtonComponents/OneDayMore";
import { useState } from "react";
import OtherDays from "./HomeComponents/OtherDays";

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  text-align: center;
  position: relative;
  overflow-y: ${(props)=>props.moreActive? 'hidden' : 'auto'};
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  font-weight: 100;
`;

const Main = ({setPos}) => {
  const { data, setLoading, loading, searchResult, setSearch, search, err, errText, setRequestName } =
    useDataFetch();
  const [oneDayMoreActive, setOneDayMoreActive] = useState(false);
  if (err) console.log(errText);

  if (oneDayMoreActive) setPos('fixed');
  if (!oneDayMoreActive) setPos('static');

  return (
    <Container moreActive={oneDayMoreActive}>
      <Navbar
        searchResult={searchResult}
        setSearch={setSearch}
        search={search}
        setRequestName={setRequestName}
        setLoading = {setLoading}
        currentLocation={data ? data.location.name : ""}
      />
      {!loading && data ? (
        <>
        <BriefData data={data} />
          {oneDayMoreActive && (<OneDayMore setActive={setOneDayMoreActive} active={OneDayMore} data={data}/>)}
          <Button onClickEvent={setOneDayMoreActive} text='More'/>
          <OtherDays data={data.forecast.forecastday}/>
        </>
      ) : (
        <Wrapper>
          {!err ? <Loading /> : <span>Something went wrong...</span>}
        </Wrapper>
      )}
    </Container>
  );
};

export default Main;
