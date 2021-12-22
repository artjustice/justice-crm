import styled from "styled-components/macro";
import {Form} from 'formik'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
`
export const Title = styled.h2`
    font-family: 'Inter';
    color: #2B3844;
    font-size: 36px;
    line-height: 48px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 48px;
`
export const StyledForm = styled(Form)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 380px;
`
export const Top = styled.div`
  display: flex;
`
