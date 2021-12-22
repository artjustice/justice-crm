import { useField } from 'formik';
import React from 'react'
import * as S from './InputStyle'

const Input = ({isSubmitting, label, marginLeft, labelMarginTop, ...props}) => {
    const [field, meta] = useField(props);

    return (
        <S.Wrapper marginLeft={marginLeft}>
            <S.Label labelMarginTop={labelMarginTop} htmlFor={props.id || props.name}>{label}</S.Label>
            <S.Input  {...field} {...props} width={props.width} error={meta.error}/>
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
        </S.Wrapper>
    )
}

export default Input