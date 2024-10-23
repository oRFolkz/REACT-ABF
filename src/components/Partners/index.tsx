import React from 'react'

import { PartnersSection, CardAboutUsLeft, CardAboutUsRight, CardAboutUsImgLeft, CardAboutUsImgRight, CardAboutUsTxtLeft, CardAboutUsTxtRight } from './styles.ts'

import imgHenrique from '../imgs/henrique/HenriqueAboutUs.png'
import imgAna from '../imgs/anaF/anaAboutUsImg.png'
import imgLarissa from '../imgs/larissa/LarissaAboutUs.png'
import imgGabriele from '../imgs/gabriele/gabrieleAboutUs.png'

function Partners() {
    return (
        <PartnersSection> 
            <CardAboutUsLeft>
                <CardAboutUsTxtLeft>
                    <h1>Dra. ANA FLAVIA ALVES</h1>
                    <p>Advogada, Inscrita na Ordem dos Advogados do Brasil sob o Nº <strong>428.031</strong></p>
                    <p>Formada pela faculdade UniSeb de Ribeirão Preto em 2019.<br></br>Pós Graduada em Direito e Processo do Trabalho pela USP Ribeirão Preto, coautora dos artigos “as responsabilidades familiares ante a promoção da igualdade de oportunidades e tratamento no Brasil á luz da OIT”, publicado nos anais do “V Seminário Internacional de Pesquisa (RE)pensando o Direito da Faculdade de Direito da USP em conjunto a UNESP”; e “O uso do uniforme e a mercantilização do trabalhador: linhas sobre a auto gestão e reafirmação do trabalho”, que foi publicado como capitulo na coletânea de livros “Complexidades e atuação do Direito na Sociedade Contemporânea” da editora E-publicar.,<br></br>
                    Dedica-se à prática na área Cível, que constitui sua preferência, detendo especialização em Direito de Família e Sucessões e cursando atualmente pós-graduação em Direito e Processo Civil.<span></span></p>
                </CardAboutUsTxtLeft>
                <CardAboutUsImgLeft>
                    <img src={imgAna} alt="" />
                </CardAboutUsImgLeft>
            </CardAboutUsLeft>
            <CardAboutUsRight>
                <CardAboutUsTxtRight>
                <h1>Dra. GABRIELE FERREIRA BEIRIGO</h1>
                <p>Advogada, Inscrita na Ordem dos Advogados do Brasil sob o Nº <strong>?</strong></p>
                <p>Gabriele Ferreira Beirigo é uma profissional do direito que se destaca por sua vasta experiência e conhecimento especializado em Direito e Processo do Trabalho. Graduada pela renomada Universidade de Ribeirão Preto, e especialista em Direito e Processo do Trabalho pela USP, Gabriele demonstrou desde cedo um interesse profundo pela área trabalhista, motivada pela sua percepção da importância das relações laborais na sociedade contemporânea.
                Com sua formação especializada, Gabriele ingressou no mercado de trabalho como advogada, onde tem desempenhado um papel crucial na defesa dos direitos de seus clientes. Sua atuação ética e comprometida a tornou uma referência no meio jurídico, sendo reconhecida tanto por colegas de profissão quanto por seus clientes pela sua competência e dedicação.<span></span></p>
                </CardAboutUsTxtRight>
                <CardAboutUsImgRight>
                    <img src={imgGabriele} alt="" />
                </CardAboutUsImgRight>
            </CardAboutUsRight>
        <CardAboutUsLeft>
            <CardAboutUsTxtLeft>
                <h1>Dr. HENRIQUE FERNANDES DE CASTRO</h1>
                <p>Advogado, Inscrito na Ordem dos Advogados do Brasil sob o Nº <strong>440.084</strong></p>
                <p>Formado em Direito pela Universidade de Franca em 2019, Pós-graduado em Direito Penal e Processo Penal pela Universidade de Santa Cruz do Sul, Pós-graduado em Direito Penal Econômico pela Pontifícia Universidade Católica de Minas Gerais, Pós-graduando em Advocacia na Fazenda Pública pela Legale, Pós-graduado em Direito Previdenciário pela Legale, com título de especialista em licitações e contratos administrativos pelo CEISC.<span></span></p>
            </CardAboutUsTxtLeft>
            <CardAboutUsImgLeft>
                <img src={imgHenrique} alt="" />
            </CardAboutUsImgLeft>
        </CardAboutUsLeft>
        <CardAboutUsRight>
            <CardAboutUsTxtRight>
                <h1>Dra. LARISSA SCANDOLARI ALTIERI</h1>
                <p>Advogada, Inscrita na Ordem dos Advogados do Brasil sob o Nº <strong>416.404</strong></p>
                <p>Formada pela Universidade Paulista – UNIP no ano de 2018.<br></br> Especialista em Direito de Família e Sucessões. <br></br>Pós Graduada em Aspectos Gerais da Sucessão Legítima e Testamentária, atualmente cursando Extensão em Holding Familiar e atuante na área Cível com enfoque em direito das sucessões.</p>
            </CardAboutUsTxtRight>
            <CardAboutUsImgRight>
                <img src={imgLarissa} alt="" />
            </CardAboutUsImgRight>
        </CardAboutUsRight>
    </PartnersSection>
    )
}

export default Partners