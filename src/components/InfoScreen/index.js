import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  text-align: center;
  svg {
    color: ${p => p.theme.colors.grey};
  }
`;

const Emoji = styled.div`
  font-size: 3rem;
  margin: 0.5em;
`;

const InfoScreen = ({ emoji = "" }) => (
  <Wrapper>
    <Emoji>{emoji}</Emoji>
    <h1>Cari film dan tonton semua nya gratis!</h1>
  </Wrapper>
);

export default InfoScreen;
