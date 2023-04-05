import React from 'react'
import styled from 'styled-components'
import channelIcon from '../img/channelIcon.png'

const Container = styled.div`
display:flex;
gap:10px;
margin:30px 0px;
`;

const Avatar = styled.img`
width:50px;
height:50px;
border-radius:50%;
`;

const Details = styled.div`
display:flex;
flex-direction:column;
gap:10px;
color:${({ theme }) => theme.text};
`;

const Name = styled.span`
font-size:13px;
font-weight:500;
`;

const Date = styled.span`
font-size:12px;
font-weight:400;
color:${({ theme }) => theme.textSoft};
margin-left:5px;
`;

const Text = styled.span`
font-size:14px;

`;



function Comment() {
    return (
        <Container>
            <Avatar src={channelIcon} />
            <Details>
                <Name>kelly van <Date>1 day ago</Date></Name>
                <Text>
                    A YouTube channel description is similar to the About Page of a website. It appears under the "About" tab of your channel's YouTube page. The YouTube channel description conveys to potential viewers what your content will cover, including the issues you tackle and the communities you serve.

                </Text>

            </Details>
        </Container>
    )
}

export default Comment