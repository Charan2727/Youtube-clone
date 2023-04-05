
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:calc(100vh-56px);
color:${({ theme }) => theme.text};

`;

const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:${({ theme }) => theme.bgLighter};
border:1px solid ${({ theme }) => theme.soft};
padding:20px 50px;
gap:10px;

`;

const Title = styled.h1`
font-size:24px;
`;

const SubTitle = styled.h2`
font-size:20px;
font-weight:300;
`;

const Input = styled.input`
border:1px solid ${({ theme }) => theme.soft};
border-radius:3px;
padding;10px;
background-color:transparent;
width:100%;
`;

const Button = styled.button`
border-radius:3px;
border:none;
padding:10px 20px;
font-weight:500;
cursor:pointer:
background-color:${({ theme }) => theme.soft};
color:${({ theme }) => theme.textSoft};
`;

const More = styled.div`
display:flex;
margin-top:10px;
font-size:12px;
color:${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
display:flex;
margin-left:50px;
`;
const Link = styled.div`
margin-left:30px;
`;


function Signin() {
    return (
        <Container>
            <Wrapper>
                <Title>sign In</Title>
                <SubTitle>to continue to youtube</SubTitle>
                <Input placeholder='username' />
                <Input type="password" placeholder='password' />
                <Button>Sign In</Button>
                <Title>Or</Title>
                <Input type='email' placeholder='email' />
                <Input placeholder='username' />
                <Input type="password" placeholder='password' />
                <Button>Sign UP</Button>

            </Wrapper>
            <More>
                English(USA)
                <Links>
                    <Link>Help</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                </Links>
            </More>
        </Container>
    )
}

export default Signin