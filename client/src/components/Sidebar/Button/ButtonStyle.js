import styled from 'styled-components/macro'
import {NavLink} from "react-router-dom";

export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 274px;
  height: 56px;
  text-decoration: none;
  color: #aaafb4;
`
export const Icon = styled.div`
  margin-left: 40px;
  margin-right: 11px;
  color: inherit;
  path {
    stroke: #aaafb4; 
  }
`
export const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: inherit;
`