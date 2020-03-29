import React from "react";
import styled from "styled-components";

const StickyNav = styled.div`
  max-width: 1180px;
  width: 100%;
  top: 0;
  position: sticky;
  z-index: 2;
  margin: 0.5rem auto;
  padding: 0px 1rem;
	background: ${p => p.theme.colors.dark};
`;

const Logo = styled.a`
  font-size: 2rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0px;
`;

const Navbar = () => (
  <StickyNav>
    <Container>
      <Logo>
        <span aria-label="logo" role="img">
          🍿
        </span>
      </Logo>
    </Container>
  </StickyNav>
);

export default Navbar;
