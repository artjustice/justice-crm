import styled from "styled-components/macro"

export const Wrapper = styled.div`
  width: 100%;
  margin-left: ${({marginLeft}) => marginLeft}
`
export const Label = styled.div`
      display: flex;
      align-self: flex-start;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 12px;
      line-height: 12px;
      margin-top: ${({labelMarginTop}) => labelMarginTop ? labelMarginTop : '24px'};
      margin-bottom: 8px;
`
export const Input = styled.input`
    width: ${({width}) => width ? width : '100%'};
    background-color: #fff;
    color: #000;
    border: 1px solid rgb(43, 56, 68, .3);
    box-sizing: border-box;
    border-radius: 3px;
    height: 46px;
    font-size: 14px;
    line-height: 20px;
    padding: 0 20px;
    outline: none;
    overflow: hidden;
    &::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
    &::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
    &:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
    &:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
    &:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
    &:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
    &:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
    &:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}
`