import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const CommentsContainer = styled.div`
    width: 100%;
    background: linear-gradient(0deg, rgba(202,168,88,0.5) 0%, rgba(255,255,255,0) 100%);
    padding: 3rem 0;
`
export const CommentsSubContainer = styled.div`
    max-width: 1050px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CommentsFiveStars = styled.div`
    width: 50%;
`

export const StarsText = styled.div`
    font-size: 2rem;
    line-height: 2rem;
    margin: auto;
    font-weight: bold;
    color: ${colors.grey};
`

export const StarsSubText = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: ${colors.grey};
`

export const StarsContainer = styled.div`
    padding-top: 1rem;
    font-size: 2.5rem;
    color: ${colors.gold};
`
export const CommentsUsers = styled.div`
    cursor: grab;
    padding: 2rem;
    margin-left: 2rem;
    text-align: center;
    width: 50%;
    height: 20rem;
    box-shadow: 1px 1px 10px ${colors.gold};
    border-radius: 1rem;
    background-color: white;
    
    img{
        width: 6rem;
        height: 6rem;
        margin: auto;
        padding-top: 1rem;
    }
`

export const UsersCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const UserName = styled.div`
    font-weight: bold;
    padding-top: 1rem;
`

export const UserComment = styled.div`
    padding-top: 1rem;
    padding-top: 1rem;
`

export const Autoplay = styled.div`
    padding-top: 1rem;
`
/* @media ( width < 960px ) {
    .commentsContainer{
        width: 100%;
    }
    .commentsSubContainer{
        gap: 1rem;
    }
    .commentsUsers{
        margin-right: 1rem;
        width: 20rem !important;
        height: 20rem !important;
    }
    .commentsFiveStars{
        width: 50%;
    }
    .starContainer{
        font-size: 2rem;
        padding-left: 2rem;
    }
    .starsText{
        padding-left: 2rem;
    }
    .starsSubText {
        padding-left: 2rem;
    }
}

@media ( width < 680px ) {
    .commentsContainer{
        padding: 2rem 0;
    }
    .commentsSubContainer {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
    }
    .commentsUsers {
        margin: 2rem;
    }
    .starsText,
    .starsSubText,
    .starContainer {
        padding: 0;
    }
    .commentsFiveStars {
        width: 100%;
    }
} */