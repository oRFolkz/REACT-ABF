import styled from 'styled-components'
import { colors } from '../../styles.ts'

export const Skillcards = styled.div`
    background: linear-gradient(0deg, rgba(202, 168, 88, 0.7) -100%, rgba(35, 31, 32, 1) -100%, rgba(35, 31, 32, 1) 95%, rgba(187, 156, 83, 0.7) 100%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
`

export const CardsContainer = styled.div`
    margin: 2rem auto;
    justify-content: center;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    max-width: 1400px;

    @media ( width < 680px ) {
        order: 1;
    }
`

export const CardSubcontainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ( width < 680px ) {
        align-items: center;
        text-align: center;
    }
`

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38rem;
    height: 15rem;

    border-radius: 1rem;
    background-color: white;
    box-shadow: 1px 1px 10px var(--color-gold);
    
    .CardImgClass {
        width: 500px;
        height: 500px;
    }

    @media ( width < 680px ) {
        flex-direction: column;
        gap: 0;
        width: 70% !important;
        height: 25rem !important;
        padding: 1rem 0;
    }

    
    @media ( width < 390px ) {
        width: 60% !important;
    }

    @media ( width < 330px ) {
        width: 50% !important;
    }
`

export const CardSubcontainerTitle = styled.h4`
    color: ${colors.gold};
    font-weight: 600;
    font-size: 1.2rem;
    padding-left: 2rem;
    padding-top: 1.5rem;
    margin: 0;
    height: 20px;

    @media ( width < 680px ) {
        padding-left: 0rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    
    @media ( width < 390px ) {
        padding-bottom: 2rem;
    }
`

export const CardSubcontainerDescription = styled.p`
    color: black;
    font-weight: 400;
    font-size: 1rem;
    padding-left: 2rem;
    padding-top: 1rem;
    margin: 0;
    width: 85%;
    height: 200px;

    @media ( width < 680px ) {
        height: auto;
        padding-left: 0rem;
        padding-top: 0rem;
    }
`