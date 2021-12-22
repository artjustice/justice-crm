import styled from 'styled-components/macro'

export const FormButton = styled.button`
  margin-top: ${({marginTop}) => marginTop};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({width}) => width ? width : '100%'};
  height: 52px;
  border-radius: 3px;
  color: #fff;
  background-color: #5382E7;
`
export const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
`