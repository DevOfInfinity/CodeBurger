import React from 'react'

import LoginImg from '../../assets/Img-Login.png'
import Logo from '../../assets/Code-Club-Burger.png'
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    Button,
    SignInLink
} from './styles'

function Login() {
    return (
        <Container>
            <LoginImage src={LoginImg} alt='Login-Image' />
            <ContainerItens>
                <img src={Logo} alt='Logo-Image' />
                <h1>Login</h1>

                <Label>Email</Label>
                <Input />

                <Label>Senha</Label>
                <Input />

                <Button>Sign In</Button>
                <SignInLink>Não possui conta ? <a>Sigin Up</a></SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login