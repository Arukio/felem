import React from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import InfoScreen from "../../components/InfoScreen";

const Wrapper = styled.div`
  max-width: 1180px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  transition: 0.2s all;
  padding: 0 1rem;
`;

const SearchView = () => {
  return (
    <Wrapper>
      <SearchBar />
      <InfoScreen emoji="☝️" />
    </Wrapper>
  );
};

export default SearchView;
