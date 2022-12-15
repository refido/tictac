import React from 'react'
import Stories from './Stories'
import styled from 'styled-components'
import Messenger from './Messenger'
import Post from './Post'

const Feed = () => {
    return (
        <FeedWrapper>
            <Stories />
            <Messenger />
            <Post profilePic=" "
                message="LOL 🤣"
                timestamp="1671034144000"
                imgName="https://i.imgflip.com/53wz42.jpg"
                username="TicTac"
            />
            <Post profilePic=" "
                message="Gogagaga"
                timestamp="1671034144000"
                imgName="https://i.kym-cdn.com/photos/images/newsfeed/002/493/509/c47.jpg"
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
export default Feed