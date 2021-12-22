import styled from 'styled-components/macro'

export const Poster = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: ${({img}) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
`