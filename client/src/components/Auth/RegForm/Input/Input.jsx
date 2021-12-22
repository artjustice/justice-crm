import { useField } from 'formik';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import * as S from './InputStyle'

const Input = ({isSubmitting, label, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <>
            <S.Label htmlFor={props.id || props.name}>{label}</S.Label>
            <S.Input  {...field} {...props} width={props.width} error={meta.error}/>
        </>
    )
}

export default Input