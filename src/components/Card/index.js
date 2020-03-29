import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: none;
	border: none;
	margin: 0;
	flex: 1;
	display: flex;
	position: relative;
	background: ${p => p.theme.colors.grey};
  padding-top: 133%;
	cursor: pointer;
	border-radius: 0.5rem;
`;
const fill = `position: absolute; top: 0; bottom: 0; left: 0; right: 0;`

const Image = styled.img`
  object-fit: cover;
	border-radius: 0.5rem;
`

const AbsoluteFill = styled.div`
  ${fill};
  display: flex;
  justify-content: space-between;
`

const Overlay = styled.div`
  ${fill};
  display: flex;
  flex-direction: column-reverse;
  background: ${p => p.theme.colors.overlay};
	box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
  @media (hover: hover) {
		border-radius: 0.1875rem;
		height: 100%;
		background: none;
		box-shadow: none;
	}
  ${Wrapper}:hover &, ${Wrapper}:focus-within &{
		background: ${p => p.theme.colors.overlay};
		box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
	}
`
const Info = styled.div`
	color: currentColor;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	padding: 0.75rem;
	cursor: pointer;
	overflow: hidden;
	@media (hover: hover) {opacity: 0;}
	${Wrapper}:hover &, ${Wrapper}:focus-within &{opacity: 1;}
`

const TextYear = styled.div`
  color: ${p => p.theme.colors.lightGrey};
`
const TextTitle = styled.div`
  margin-bottom: .25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
`


const Card = ({...props}) =>{
  const title = props.title
  const image = props.poster_path
  const year = (props.release_date || "").split("-")[0]
  return (
    <Wrapper>
      <AbsoluteFill>
          {image && (
             <Image 
             src={`https://image.tmdb.org/t/p/w300/${image}`}
            />
          )}
      </AbsoluteFill>
      <Overlay>
          <Info>
            <TextTitle>{title}</TextTitle>
            <TextYear>{year}</TextYear>
          </Info>
      </Overlay>
    </Wrapper>  
  )
}

export default Card;
