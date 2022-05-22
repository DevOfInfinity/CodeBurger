import styled from 'styled-components'
import Background from '../../assets/Fundo.svg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginImage = styled.img`
    height: 70%;
`

export const ContainerItens = styled.div`
    background: #373737;
    border-radius: 0 10px 10px 0;
    height: 70%;
    padding: 25px 75px;
    display: flex;
    justify-content: center;
    flex-direction: column;

h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
    text-align: center;
    margin-top: 100px;
}

form {
    display: flex;
    flex-direction: column;
}
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin: 28px 0 5px 0;
`

export const Input = styled.input`
    width: 391.42px;
    height: 38.32px;
    left: 944px;
    top: 462.38px;
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: ${props => (props.error ? '2px solid #CC1717' : 'none')};
    padding-left: 10px;
`

export const Button = styled.button`
    width: 182.81px;
    height: 36.13px;
    background: #9758A6;
    border-radius: 20px;
    border: none;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #EEEEEE;

    margin: 75px 0 20px 0;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`

export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;

a {
    cursor: pointer;
    text-decoration: underline;
}
`
export const ErrorText = styled.p`
    color: #CC1717;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 2px;
`