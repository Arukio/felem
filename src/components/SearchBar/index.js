import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  position: sticky;
  top: 0.875rem;
  z-index: 3;
`;

const Wrapper = styled.label`
  background: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.lightGrey};
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 0.25rem;
  position: relative;
  box-shadow: 0 0 4rem 0.125rem ${p => p.theme.colors.dark};
  padding: 0.75rem;
`;

const Loupe = () => (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.5 14.5l-3.72-3.72" />
      <circle cx="6.67" cy="6.67" r="5.33" />
    </g>
  </svg>
);

const Input = styled.input`
  color: ${p => p.theme.colors.dark};
  border: none;
  background: none;
  outline: none;
  flex: 1;
  margin-left: 0.375rem;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.01em;

  &::placeholder {
    color: ${p => p.theme.colors.lightGrey};
  }
  &::selection {
    background: ${p => p.theme.colors.lightGrey};
    color: ${p => p.theme.colors.white};
  }
`;

const SearchBar = ({ value, onChange }) => (
  <Container>
    <Wrapper>
      <Loupe />
      <Input
        placeholder="Cari film "
        autoFocus={true}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  </Container>
);

export default SearchBar;
