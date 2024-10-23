import styled from 'styled-components'
import { colors } from '../../styles.ts'

const border = {
    borderSize: '3px',
}

export const PartnersSection = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(0deg, rgba(202, 168, 88, 0.7) 0%, rgba(35,31,32,1) 1%, rgba(35,31,32,1) 99%, rgba(187,156,83,0.7) 100%);
    color: ${colors.gold};
    padding: 3rem 0;
`

export const CardAboutUsLeft = styled.div`
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: auto;
    width: 90%;
    max-width: 70rem;
    height: 580px;
    margin: auto;
    margin-bottom: 0rem;

    @media ( width < 960px ) {
        height: 390px;
        width: 85%;
        margin-bottom: 4rem;
    }

    @media ( width < 720px ) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        width: 100%;
        max-width: 70rem;
        height: 580px;
        margin: auto;
        margin-bottom: 0rem;
        max-height: none;
        height: 50rem;
    }
`

export const CardAboutUsRight = styled.div`
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: auto;
    width: 90%;
    max-width: 70rem;
    height: 580px;
    margin: auto;
    margin-bottom: 0rem;

    @media ( width < 960px ) {
        height: 390px;
        width: 85%;
        margin-bottom: 4rem;
    }

    @media ( width < 720px ) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        width: 100%;
        max-width: 70rem;
        height: 580px;
        margin: auto;
        margin-bottom: 0rem;
        max-height: none;
        height: 50rem;
    }
`

export const CardAboutUsTxtLeft = styled.div`
    z-index: 0;
    grid-row: 1 / 2;
    grid-column: 7 /20;
    background: linear-gradient(0deg, #caa8583b 0%, rgba(255, 255, 255, 0) 100%);
    padding: 1rem 0 0rem 3.5rem;
    width: 105%;
    height: 550px;
    border-right: ${border.borderSize} solid ${colors.gold};
    border-top: ${border.borderSize} solid ${colors.gold};
    border-bottom: ${border.borderSize} solid ${colors.gold};
    border-radius: 2rem;
    font-weight: 500;

    p {
        color: white;
        font-size: 1.1rem;
        line-height: 1.5rem;
        padding-right: 3.5rem;
        margin-bottom: 1rem;
    }

    h1 {
    font-size: 2rem;
    color: white;
    }

    &p:nth-child(2){
    color:${colors.gold}
    }

    @media ( width < 960px ) {
        height: 400px;
        overflow-x: auto;
        border-radius: 0rem;

        ::-webkit-scrollbar {
        scrollbar-width: none !important;
        display: none;
        }
    }

    @media ( width < 720px ) {
        border: ${border.borderSize} solid ${colors.gold} !important;
        width: 80%;
        max-width: 550px;
        padding: 1rem 0 2rem 1.5rem;
        margin-bottom: 2rem;
    }
`

export const CardAboutUsTxtRight = styled.div`
    z-index: 0;
    grid-row: 1 / 2;
    grid-column: 1 / 14;
    background: linear-gradient(0deg, #caa8583b 0%, rgba(255, 255, 255, 0) 100%);
    padding: 1rem 0 0rem 3.5rem;
    width: 105%;
    height: 550px;
    border-left: ${border.borderSize} solid ${colors.gold};
    border-top: ${border.borderSize} solid ${colors.gold};
    border-bottom: ${border.borderSize} solid ${colors.gold};
    border-right: none !important;
    border-radius: 2rem;
    font-weight: 500;

    p {
        color: white;
        font-size: 1.1rem;
        line-height: 1.5rem;
        padding-right: 3.5rem;
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 2rem;
        color: white;
    }

    &p:nth-child(2){
        color:${colors.gold}
    }

    @media ( width < 960px ) {
        height: 400px;
        overflow-x: auto;
        border-radius: 0rem;
        grid-column: 1 / 14;

        ::-webkit-scrollbar {
        scrollbar-width: none !important;
        display: none;
        }
    }

    @media ( width < 720px ) {
        border: ${border.borderSize} solid ${colors.gold} !important;
        width: 80%;
        max-width: 550px;
        padding: 1rem 0 2rem 1.5rem;
        margin-bottom: 2rem;
    }
`

export const CardAboutUsImgLeft = styled.div`
    z-index: 1;
    grid-row: 1 / 2;
    grid-column: 1 / 13;
    width: 55%;
    height: auto;
    transition: all 0.3s ease;

    img {
        width: 100%;
        height: 550px;
    }

    :hover {
        transform: scale(1.05);
    }

    @media ( width < 960px ) {
        width: 55%;
        height: 380px;

        img {
            width: 105%;
            height: 420px;
        }
    }

    @media ( width < 720px ) {
        margin-bottom: 1rem;
        width: 80%;
        max-width: 300px;

        img {
        width: 100% !important;
        }
    }
`

export const CardAboutUsImgRight = styled.div`
    z-index: 1;
    grid-row: 1 / 2;
    grid-column: 15 / 20;
    width: 66%;
    height: auto;
    transition: all 0.3s ease;

    img {
        width: 200%;
        height: 550px;
    }

    :hover {
        transform: scale(1.05);
    }

    @media ( width < 960px ) {
        width: 55%;
        height: 380px;
        grid-column: 15 / 20;

        img {
            width: 270%;
            height: 420px;
        }
    }

    @media ( width < 720px ) {
        margin-bottom: 1rem;
        width: 80%;
        max-width: 300px;

        img {
        width: 100% !important;
        }
    }
`