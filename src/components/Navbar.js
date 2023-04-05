import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedICon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
position:sticky;
top:0;
background-color: ${({ theme }) => theme.bgLighter};
height:56px;
`;
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
height:100%;
padding 0px 20px;
position:relative;


`;
const Search = styled.div`
position:absolute;
left:0px;
right:0px;
margin:auto;
width:40%;
display:flex;
align-items:center;
justify-content:space-between;
padding:5px;
border:1px solid #ccc;
border-radius:3px;
`;
const Input = styled.input`
border:none;
outline:none;
background-color:transparent;
color:${({ theme }) => theme.text};
`;
const Button = styled.button`
padding:5px 15px;
background-color:transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius:3px;
font-weight:500;
cursor:pointer;
align-items:center;
display:flex;
gap:5px;
`;

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='search' />
                    <SearchOutlinedICon />
                </Search>
                <Link to="signin" style={{ textDecoration: "none" }}>
                    <Button><AccountCircleIcon />SIGN IN</Button>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Navbar