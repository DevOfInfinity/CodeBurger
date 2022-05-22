import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/Img-Login.png'
import Logo from '../../assets/Code-Club-Burger.png'
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    Button,
    SignInLink,
    ErrorText
} from './styles'

function Login() {
    const schema = Yup.object().shape({
        email: Yup.string().email('Invalid Email').required('Need Email!'),
        password: Yup.string().required('Need Password!').min(6, 'Need 6 Character!'),
    })

    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm({
            resolver: yupResolver(schema)
        });

    const onSubmit = data => console.log(data);

    return (
        <Container>
            <LoginImage src={LoginImg} alt='Login-Image' />
            <ContainerItens>
                <img src={Logo} alt='LogoImage' />
                <h1>Login</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type='email' {...register("email")} />
                    <ErrorText>{errors.email?.message}</ErrorText>

                    <Label>Senha</Label>
                    <Input type='password' {...register("password")} />
                    <ErrorText>{errors.password?.message}</ErrorText>

                    <Button type='submit'>Sign In</Button>
                </form>

                <SignInLink>
                    Não possui conta ? <a href='www'>Sigin Up</a>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login