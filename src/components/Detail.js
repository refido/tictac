import React from 'react'
import Stories from './Stories'
import styled from 'styled-components'
import Messenger from './Messenger'
import PostDetail from './PostDetail'

const Detail = () => {
    return (
        <FeedWrapper>
            <PostDetail profilePic=" "
                message="LOL 🤣"
                timestamp="1671034144000"
                imgName="https://i.imgflip.com/53wz42.jpg"
                username="TicTac"
            />
        </FeedWrapper>
    )
}

const FeedWrapper = styled.div`
    flex: 1;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default Detail;