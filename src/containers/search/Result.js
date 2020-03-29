import React, { Fragment, useEffect } from "react";
import useFetch from 'react-fetch-hook'

import Card from '../../components/Card'
import { useInView } from "react-intersection-observer";

const getUrlData = (search, page) => {
  const base = 'https://api.themoviedb.org/3'
	const api = '88ef16f0da1b0867a47e0845eb3f74c9'
	return ([
		`${base}/search/movie`,
    `?api_key=${api}`,
    `&language=id`,
		`&query=${search}`,
		`&page=${page}`,
	])
}

const InfiniteScroll = ({page, setPage}) => {
	useEffect(() => setPage(page + 1))
	return null
}

const Result = ({ search, page, isLastpage, setPage }) => {
  const { isLoading, data} = useFetch(getUrlData(search, page).join(""))
  const [ref, inView] = useInView()

  if(isLoading) return ( Array(20).fill(0).map((x, i) => (
    <Card />
  )))

  if(!data.results.length) return null

  const totalPages = data.total_pages

  return (
    <Fragment>
      {data.results.map(entry => (
        <Card {...entry} />
      ))}
      {isLastpage && totalPages && totalPages > page && (
        <div ref={ref} >{inView && <InfiniteScroll page={page} setPage={setPage} />}</div>
      )}
    </Fragment>
  )
};

export default Result;
