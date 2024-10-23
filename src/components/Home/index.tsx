import React from 'react'
import { Header, HeaderContainer, HeaderLogo, Links, BlogHover, ServicosHover, Icons, QuemSomosHover, LocalizacaoHover, PeticoesButton, IconsHeader, ShowLinksMobile} from './styles.ts'

import logo from '../imgs/logos/logotipo.png'
import { FacebookColor, InstagramColor, WhatsAppColor } from '../../styles.ts'

function Home() {
    return (
        <Header>
            <HeaderContainer>
                <ShowLinksMobile>
                    <i className="fa-solid fa-bars"></i>
                </ShowLinksMobile>
                <HeaderLogo>
                    <img src={logo} alt="LOGO" />
                </HeaderLogo>
                <Links>
                    <BlogHover>
                        <Icons><i className="fa-solid fa-address-card "></i>Blog</Icons>         
                    </BlogHover>
                    <ServicosHover>
                        <Icons><i className="fa-solid fa-arrow-down"></i>Serviços</Icons>
                    </ServicosHover>
                    <QuemSomosHover>
                    <Icons><i className="fa-solid fa-user-tie"></i>Quem Somos</Icons>
                    </QuemSomosHover>
                    <LocalizacaoHover>
                        <Icons><i className="fa-solid fa-location-dot"></i>Localização</Icons>
                    </LocalizacaoHover>
                </Links>
                <PeticoesButton>
                    <p><i className="fa-solid fa-book-open"></i>Petições</p>
                </PeticoesButton>
                <IconsHeader>
                    <a href="https://www.instagram.com/abf_advogados?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                    <InstagramColor className="fa-brands fa-instagram"></InstagramColor>
                    </a>
                    <a href="https://www.instagram.com/abf_advogados?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                    <FacebookColor className="fa-brands fa-facebook"></FacebookColor>
                    </a>
                    <a href="https://www.instagram.com/abf_advogados?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer">
                    <WhatsAppColor className="fa-brands fa-whatsapp"></WhatsAppColor>
                    </a>
                </IconsHeader>
            </HeaderContainer>
        </Header>
    )
}

export default Home