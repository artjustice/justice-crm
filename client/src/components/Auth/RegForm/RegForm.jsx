import React, {useRef} from 'react'
import * as yup from 'yup'
import * as S from './RegFormStyle'
import { Formik, Form } from 'formik';
import Input from './Input/Input'
import FormButton from "../../common/FormButton/FormButton";

const RegForm = () => {
    return (
        <S.Container>
            <S.Title>Create an account</S.Title>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    companyName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={yup.object({
                    firstName: yup.string()
                        .required('Введите имя'),
                    lastName: yup.string()
                        .required('Введите фамилию'),
                    companyName: yup.string()
                        .required('Введите название компании'),
                    email: yup.string()
                        .email('Некорректный адрес почты')
                        .required('Введите свою почту'),
                        // .test('Проверка почты на сервере', 'Почта уже зарегистрирована',
                        //     function (value) {
                        //         return new Promise((resolve, reject) => {
                        //             api.get('/auth/check/?regEmail=' + value)
                        //                 .then(res => {
                        //                     resolve(res.data);
                        //                     if (!res.data) {
                        //                         setRegLoading(false)
                        //                     }
                        //                 })
                        //                 .catch(error => {
                        //                     setRegLoading(false)
                        //                     notification('error', 'Ошибка сервера', null)
                        //                     console.log(error)
                        //                     reject(error)
                        //                 })
                        //         })
                        //     }),
                    password: yup.string()
                        .min(6, 'Не меньше 6 символов')
                        .max(20, 'Не больше 20 символов')
                        .required('Введите пароль'),
                    confirmPassword: yup.string()
                        .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
                        .required('Повторите пароль'),
                })}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setSubmitting(false);
                }}
            >
                {({isSubmitting, setFieldValue}) => (
                    <S.StyledForm>
                        <S.Top>
                            <Input
                                isSubmitting={isSubmitting}
                                label="First name"
                                name="firstName"
                                type="text"
                                placeholder="First name"
                                labelMarginTop='0'
                            />
                            <Input
                                isSubmitting={isSubmitting}
                                label="Last name"
                                name="lastName"
                                type="text"
                                placeholder="Last name"
                                labelMarginTop='0'
                                marginLeft='16px'
                            />
                        </S.Top>
                        <Input
                            isSubmitting={isSubmitting}
                            label="Company name"
                            name="companyName"
                            type="text"
                            placeholder="Company name"
                        />
                        <Input
                            isSubmitting={isSubmitting}
                            label="Email"
                            name="email"
                            type="text"
                            placeholder="Email"
                            onChange={(e)=>{
                                const value = e.target.value;
                                setFieldValue('email', value.toLowerCase().trim());
                            }}
                        />
                        <Input
                            isSubmitting={isSubmitting}
                            label="Enter password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            onChange={(e)=>{
                                const value = e.target.value;
                                setFieldValue('password', value.trim());
                            }}
                        />
                        <Input
                            isSubmitting={isSubmitting}
                            label="Repeat password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Repeat password"
                            onChange={(e)=>{
                                const value = e.target.value;
                                setFieldValue('confirmPassword', value.trim());
                            }}
                        />
                        <FormButton title='Create account' marginTop='40px' type='submit'/>
                        {/*<S.Bottom>*/}
                        {/*    <S.CreateButton type='submit' disabled={isSubmitting || regLoading}>*/}
                        {/*        {regLoading ? <SpinnerSvg /> : 'Продолжить регистрацию'}*/}
                        {/*    </S.CreateButton>*/}
                        {/*</S.Bottom>*/}
                    </S.StyledForm>
                )}
            </Formik>
        </S.Container>
    );
};

export default RegForm