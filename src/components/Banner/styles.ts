import styled from 'styled-components'
import BannerImg from '../imgs/bannerImg/bannerImg.jpg'

export const MainBanner = styled.div`
    width: 100%;
    height: 75vh;
    background-image: url(${BannerImg});
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    transition: all 1s ease;

    @media ( width < 425px ) {
        min-height: 400px;
        height: 15vh;
    }
`

export const MainBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 4rem;
    left: 5rem;
    z-index: 99;
`

export const WhiteFade = styled.div`
    width: 100%;
    height: 30%;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 60%);
    position: absolute;
    bottom: 0;
    left: 0;
`