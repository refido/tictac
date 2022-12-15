import styled from "styled-components";
// import { Link } from "react-router-dom";

const Login = () => {
    return (
        <LoginWrapper>
            <Title>LOG IN</Title>
            <InputForm>
                <InputLabel>Email</InputLabel>
                <input className="emailInput" type="email" required />
            </InputForm>

            <InputForm>
                <InputLabel>Password</InputLabel>
                <input className="passwordInput" type="password" required />
            </InputForm>
            <InputForm>
                <InputLabel></InputLabel>
                <button>Log in</button>
            </InputForm>
            <InputForm>
                <InputLabel></InputLabel>
                Don't have an account? <SignUpLink> Sign up</SignUpLink>
            </InputForm>
        </LoginWrapper>
    );
};

const InputLabel = styled.div`
    min-width: 80px;
    margin: 10px;
    text-align: left;
`;

const SignUpLink = styled.span`
    font-weight: bold;
    color: #2e81f4;
    margin-left: 5px;
`;

const LoginWrapper = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    text-align: center;
`;
const InputForm = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    margin: auto;
    justify-content: center;
    .emailInput{
        min-width: 300px;
        max-width: 500px;
        height: 30px;
        border-radius: 5px;
        padding: 5px;
    }
    .passwordInput{
        min-width: 300px;
        max-width: 500px;
        height: 30px;
        border-radius: 5px;
        padding: 5px;
    }    
    button{
        min-width: 320px;
        max-width: 500px;
        height: 40px;
        border-radius: 5px;
        padding: 5px;
        background-color: #2e81f4;
        border: none;
        color: white;
    }
`

export default Login;