import React from 'react'
import Story from './Story'
import styled from 'styled-components'
const Stories = () => {
    return (
        <StoriesWrapper>
            <Story
                image="https://www.wyzowl.com/wp-content/uploads/2022/04/img_624d8245533d8.jpg"
                profileSrc=" "
                title="TicTac"
            />
            <Story
                image="https://www.wyzowl.com/wp-content/uploads/2022/04/img_624d8245533d8.jpg"
                profileSrc=" "
                title="Tictac"
            />
            <Story
                image="https://www.wyzowl.com/wp-content/uploads/2022/04/img_624d8245533d8.jpg"
                profileSrc=" "
                title="TicTac"
            />
        </StoriesWrapper>
    )
}
const StoriesWrapper = styled.div`
    display: flex;
`
export default Stories