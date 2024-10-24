import React from 'react'
import { Footer, FooterContainer, FooterSubContainer, LogoSide, InfoSide, ContactBook, FooterInfo, TimeSide, FooterClock, FooterTime, LocationSide, Diretos, Teste } from './styles.ts'

import LogoFooter from '../imgs/logos/logofooter.png'
function Location() {
    return (
        <Footer>
            <FooterContainer>
                <FooterSubContainer>
                    <LogoSide>
                    <img src={LogoFooter} alt="logoFooter" />
                    </LogoSide>
                    <Teste>
                        <InfoSide>
                            <ContactBook>
                                <i className="fa-solid fa-address-book"></i>
                            </ContactBook>
                            <FooterInfo>
                                <p><i className="fa-solid fa-location-dot"></i> Avenida 03, N° 740<br></br>Centro - Orlândia/SP</p>
                                <p><i className="fa-solid fa-phone"></i>        (16) 3826-3279</p>
                                <p><i className="fa-brands fa-whatsapp"></i>    (16) 99281-9803</p>
                            </FooterInfo>
                        </InfoSide>
                        <TimeSide>
                            <FooterClock>
                                <i className="fa-solid fa-clock"></i>
                            </FooterClock>
                            <FooterTime>
                                <p><i className="fa-regular fa-clock"></i> Segunda a Sexta : 08:00 - 18:00</p>
                                <p><i className="fa-regular fa-clock"></i> Sábado : FECHADO </p>
                                <p><i className="fa-regular fa-clock"></i> Domingo : FECHADO </p>
                            </FooterTime>
                        </TimeSide>
                    </Teste>
                </FooterSubContainer>
            </FooterContainer>
            <LocationSide>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.9495487788154!2d-47.88465763037234!3d-20.718417844427226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ba254adcb2b4f1%3A0x64d5e40c3161efb!2sABF%20ADVOGADOS%20ASSOCIADOS%20-%20ORL%C3%82NDIA!5e0!3m2!1spt-BR!2sbr!4v1705828742741!5m2!1spt-BR!2sbr" width={"100%"} height={"300"} loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
            </LocationSide>
            <Diretos>
                <h6>| | Todos os Direitos Reservados | |</h6>
            </Diretos>
        </Footer>
    )
}

export default Location