import React from 'react'
import { Cards, CardsContainer, CardSubcontainer, CardSubcontainerDescription, CardSubcontainerTitle, Skillcards  } from './styles.ts'

import { ReactComponent as CardImg1 } from '../imgs/svgs/undraw_save_to_bookmarks_re_8ajf.svg'
import { ReactComponent as CardImg2 } from '../imgs/svgs/undraw_appreciate_it_re_yc8h.svg'
import { ReactComponent as CardImg3 } from '../imgs/svgs/undraw_mobile_content_xvgr.svg'
import { ReactComponent as CardImg4 } from '../imgs/svgs/undraw_interview_re_e5jn.svg'
/* import CardImg1 from '../imgs/svgs/undraw_save_to_bookmarks_re_8ajf.svg'
import CardImg2 from '../imgs/svgs/undraw_appreciate_it_re_yc8h.svg'
import CardImg3 from '../imgs/svgs/undraw_mobile_content_xvgr.svg'
import CardImg4 from '../imgs/svgs/undraw_interview_re_e5jn.svg' */

function SkillCards() {
    return (
        <Skillcards>
            <CardsContainer>
                <Cards>
                    <CardImg1 className='CardImgClass'/>
                    <CardSubcontainer>
                        <CardSubcontainerTitle>Abordagem Jovem e Dinâmica:</CardSubcontainerTitle>
                        <CardSubcontainerDescription>Como um escritório de advocacia liderado por profissionais jovens, oferecemos uma abordagem dinâmica e atualizada para lidar com os casos legais.<br></br>Nossa energia e entusiasmo nos permitem abordar os problemas de maneira criativa e inovadora.
                        </CardSubcontainerDescription>
                    </CardSubcontainer>
                </Cards>
                <Cards>
                    <CardSubcontainer>
                        <CardSubcontainerTitle>Perspectivas Modernas do Direito:</CardSubcontainerTitle>
                        <CardSubcontainerDescription>Estamos comprometidos em compreender e aplicar as mais recentes tendências e desenvolvimentos legais. <span><br></br> Nossa abordagem moderna do direito nos permite oferecer soluções adaptadas às necessidades contemporâneas dos nossos clientes.</span>
                        </CardSubcontainerDescription>
                    </CardSubcontainer>
                    <CardImg2 className='CardImgClass'/>
                </Cards>
                <Cards>
                <CardImg3 className='CardImgClass'/>
                    <CardSubcontainer>
                        <CardSubcontainerTitle>Foco na Tecnologia:</CardSubcontainerTitle>
                        <CardSubcontainerDescription>Reconhecemos a importância da tecnologia no mundo jurídico atual.
                            <span><br></br>
                            Utilizamos ferramentas e recursos tecnológicos avançados para aumentar a eficiência e fornecer um serviço de alta qualidade aos nossos clientes.
                            </span>
                        </CardSubcontainerDescription>
                    </CardSubcontainer>
                </Cards>
                <Cards>
                    <CardSubcontainer>
                        <CardSubcontainerTitle>Atendimento Personalizado:</CardSubcontainerTitle>
                        <CardSubcontainerDescription>Valorizamos o relacionamento com nossos clientes e nos esforçamos para oferecer um atendimento personalizado e próximo.<span><br></br>Estamos sempre disponíveis para ouvir as preocupações e necessidades de nossos clientes, garantindo que eles se sintam apoiados e compreendidos ao longo do processo legal.</span>
                        </CardSubcontainerDescription>
                    </CardSubcontainer>
                    <CardImg4 className='CardImgClass'/>
                </Cards>       
            </CardsContainer>
        </Skillcards>
    )
}

export default SkillCards