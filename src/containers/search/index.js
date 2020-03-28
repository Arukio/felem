import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import InfoScreen from "../../components/InfoScreen";
import Result from "./Result";

const Wrapper = styled.div`
  max-width: 1180px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  transition: 0.2s all;
  padding: 0 1rem;
`;

const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1rem;
`;

const SearchView = () => {
  const [search, setSearch] = useState("");

  return (
    <Wrapper>
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      <Container>{search && <Result search={search} />}</Container>
      {!search && <InfoScreen emoji="☝️" />}
    </Wrapper>
  );
};

export default SearchView;
