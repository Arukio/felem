import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const fill = 'position: absolute; top: 0; bottom: 0; left: 0; right: 0;'
const Container = styled.div`
  ${fill};
  display: flex;
  flex: 1;
  z-index: 10;
  background-color: black;
  align-items: center;
  justify-content: center;
`

const Player = styled.iframe`
  flex: 1 1 auto;
  height: 100%;
  width: 100%;
`

const Loading = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1rem;
`

const PlayScreen = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },5000)
  }, [])

  return (
    <Container>
      {loading && (
        <Loading>
          Sabar yaa film nya loading dulu..
        </Loading>
      )}
      <Player 
        src="http://database.gdriveplayer.us/player.php?imdb=tt1285016" 
        sandbox="allow-scripts"
        hidden={loading}
      />    
    </Container>
  )
}

export default PlayScreen