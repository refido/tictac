import styled from "styled-components";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <SignupWrapper>
           <Title>SIGN UP</Title>
            <InputForm>
                <InputLabel>Email</InputLabel>
                <input className="emailInput" type="email" required />
            </InputForm>
            <InputForm>
                <InputLabel>Name</InputLabel>
                <input className="nameInput" type="text" required />
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
                Already have an account? <LoginLink> Log in</LoginLink>
            </InputForm>
        </SignupWrapper>
    );
};

const InputLabel = styled.div`
    min-width: 80px;
    margin: 10px;
    text-align: left;
`;

const LoginLink = styled.span`
    font-weight: bold;
    color: #2e81f4;
    margin-left: 5px;
`;

const SignupWrapper = styled.div`
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
    .nameInput{
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
        min-width: 315px;
        max-width: 500px;
        height: 40px;
        background-color: #2e81f4;
        border: none;
        color: white;
        border-radius: 5px;
    }
`

export default Signup;