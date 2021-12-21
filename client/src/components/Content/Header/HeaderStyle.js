import styled from 'styled-components/macro'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 122px;
  padding-top: 48px;
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.div`
  margin-top: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #2B3844;
`
export const Description = styled.div`
  margin-top: 8px;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #68727A;
`