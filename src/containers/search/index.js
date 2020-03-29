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
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 1.5rem;
`;

const SearchView = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const pagesArray = [...Array(page).fill(0).map((x, i) => i+1)]


  const onChange = e => {
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <Wrapper>
      <SearchBar
        value={search} 
        onChange={onChange}
      />
      <Container>
        {(!!search && search.length > 2) && pagesArray.map(item => (
          <Result
            key={item}
            search={search}
            page={item}
            isLastpage={pagesArray.slice(-1)[0] === page}
            setPage={setPage}
          />
        ))}
      </Container>
      {!search && <InfoScreen emoji="☝️" />}
    </Wrapper>
  );
};

export default SearchView;
