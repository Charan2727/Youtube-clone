import React from 'react'
import channelIcon from '../img/channelIcon.png'
import styled from 'styled-components'
import Comment from './Comment';


const Container = styled.div`

`;

const NewComment = styled.div`
display:flex;
align-items:center;
gap:10px;
`;

const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;
`;

const Input = styled.input`
border:none;
border-bottom:1px solid ${({ theme }) => theme.soft};
background-color:transparent;
padding:5px;
outline:none;
width:100%;
color:${({ theme }) => theme.text};
`;

function Comments() {
    return (
        <Container>
            <NewComment>
                <Avatar src={channelIcon} />
                <Input placeholder='Add a comment ....' />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />

        </Container>
    )
}

export default Comments