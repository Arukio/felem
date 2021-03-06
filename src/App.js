import React, { Fragment, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { Router } from "@reach/router";
import styled from "styled-components";
import PlayScreen from "./containers/play";
import MovieScreen from "./containers/movie";

const SearchView = lazy(() => import("./containers/search"));

const Wrapper = styled.div`
  flex: 1;
  max-width: 1180px;
  flex-direction: column;
  align-self: center;
  width: 100%;
`;

export default function App() {
  return (
    <Fragment>
      <Navbar />
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Router>
            <SearchView path="/" />
            <PlayScreen path="/play" />
            <MovieScreen path="/movie/:id" />
          </Router>
        </Suspense>
      </Wrapper>
    </Fragment>
  );
}
