import React from 'react'
import Story from './Story'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Stories = () => {
    return (
        <StoriesWrapper>
            <Link to={`video`}>
                <Story
                    image="https://www.wyzowl.com/wp-content/uploads/2022/04/img_624d8245533d8.jpg"
                    profileSrc=" "
                    title="TicTac"
                />
            </Link>
            <Link to={`video`}>
                <Story
                    image="https://www.wyzowl.com/wp-content/uploads/2022/04/img_624d8245533d8.jpg"
                    profileSrc=" "
                    title="TicTac"
                />
            </Link>
            <Link to={`video`}>
                <Story
                    image="https://www.wyzowl.com/wp-content/uploads/2022/04/img_624d8245533d8.jpg"
                    profileSrc=" "
                    title="TicTac"
                />
            </Link>
            <Link to={`video`}>
                <Story
                    image="https://www.wyzowl.com/wp-content/uploads/2022/04/img_624d8245533d8.jpg"
                    profileSrc=" "
                    title="TicTac"
                />
            </Link>
        </StoriesWrapper >
    )
}
const StoriesWrapper = styled.div`
    display: flex;
`
export default Stories