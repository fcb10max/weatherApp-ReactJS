import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
  box-sizing: border-box;
  width: 98vw;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;
const Logo = styled.div`
  height: 50px;

  display: flex;
  align-items: center;

  span {
    font-size: 50px;
    font-weight: 300;
    color: #1eff00;

    @media (max-width: 600px) {
      font-size: 30px;
    }
  }
  `;
const SearchContainer = styled.div`
  max-width: 30%;
  width: 100%;
  position: relative;
  
  @media (max-width: 600px) {
    max-width: 60%;
  }
`;
const SearchInput = styled.div`
  display: flex;
  width: 100%;
`;
const Input = styled.input`
  flex: 9;
  width: 100%;
  background-color: #fff;
  border: none;
  font-weight: 400;
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  :focus {
    outline: none;
  }
`;
const Icon = styled.div`
  flex: 1;
  min-width: 40px;
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AutoComBox = styled.div`
  display: ${(props) => (props.search ? "block" : "none")};
  width: 100%;
  background-color: white;
  top: 26px;
  position: absolute;
  list-style: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-height: 40vh;
  overflow-y: scroll;

  li {
    padding: 10px 0 10px 10px;
    :hover {
      background-color: #efefef;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;

const Navbar = ({
  searchResult,
  setSearch,
  search,
  setRequestName,
  setLoading,
  currentLocation,
}) => {
  const [inputSuggActive, setInputSuggActive] = useState(false);

  const keyPressHandler = (e) => {
    const code = e.keyCode || e.which;

    if (code !== 13) return;

    if (!search) return setRequestName(currentLocation);

    setLoading(true);

    setRequestName(search);
  };

  const clickHandler = (e) => {
    const div = document.getElementById("autoComBox");
    const top = div?.getBoundingClientRect().top;
    const bottom = div?.getBoundingClientRect().bottom;
    const left = div?.getBoundingClientRect().left;
    const right = div?.getBoundingClientRect().right;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (inputSuggActive && mouseX<left || mouseX>right && mouseY<top || mouseY>bottom) {
      setInputSuggActive(false);
    }

  };

  window.addEventListener("keypress", (e) => keyPressHandler(e));
  window.addEventListener("click", (e) => clickHandler(e));

  return (
    <Container>
      <Wrapper>
        <Logo>
          <span>Weather</span>
        </Logo>
        <SearchContainer
          id="searchBlock"
          onClick={() => setInputSuggActive(true)}
        >
          <SearchInput>
            <Input
              type="text"
              placeholder="Look for a city"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Icon>
              <FontAwesomeIcon icon={faSearch} />
            </Icon>
          </SearchInput>
          {searchResult && inputSuggActive && (
            <AutoComBox id="autoComBox" search={search}>
              {searchResult.map((sugg) => (
                <li key={sugg.id} onClick={() => setSearch(sugg.name)}>
                  {sugg.name}
                </li>
              ))}
            </AutoComBox>
          )}
        </SearchContainer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
