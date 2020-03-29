import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  overflow: hidden;
  object-fit: cover;
  border-radius: .25rem;
  background-color: rgb(10, 16, 20);
  padding-top: 133.33%;
  position: relative;
  max-width: 200px;
`
const fill = 'position: absolute; top: 0; bottom: 0; left: 0; right: 0;'


const ImageWrapper = styled.div`
  ${fill};
  display: flex;
  flex: 1;
`

const Image = styled.img`
  display: block; 
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MovieImages = () => (
  <Container>
    <ImageWrapper>
      {/* <Image src="https://image.tmdb.org/t/p/w1280//8T9D3UOg49mcuXI8gHVC53cWAD1.jpg" /> */}
    </ImageWrapper>
  </Container>
)

export default MovieImages