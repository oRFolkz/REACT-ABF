import React from 'react'
import { Autoplay, CommentsContainer, CommentsFiveStars, CommentsSubContainer, CommentsUsers, StarsContainer, StarsSubText, StarsText, UserComment, UserName, UsersCard } from './styles.ts'

function Coments() {
    return (
        <CommentsContainer>
            <CommentsSubContainer>
                <CommentsFiveStars>
                    <StarsText>Somos nota 5 <br></br><strong>nas avaliações do Google</strong></StarsText>
                    <StarsSubText>confira os comentarios</StarsSubText>
                    <StarsContainer>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </StarsContainer>
                </CommentsFiveStars>
                <CommentsUsers>
                    <Autoplay>
                        <UsersCard>
                            <UserName>Filipe Borges</UserName>
                            <img src="https://lh3.googleusercontent.com/a-/ALV-UjV1s0kjKUQ1UqDy1bu1esvdYH7VZkL1ydroLBdxZKSTGgo=w60-h60-p-rp-mo-br100" alt="SVG" />
                            <UserComment>Fiquei muito satisfeito com o serviço que foi contratado. Profissionais excelentes que priorizam sempre o bem estar e as necessidades dos clientes.
                            </UserComment>
                        </UsersCard>
                        {/* <UsersCard>
                            <UserName>Sarah Ferreira Beirigo</UserName>
                            <img src="https://lh3.googleusercontent.com/a-/ALV-UjXrzkK5u2TzgzYdz05wg-0UJvKuVoA7WLpsq_9rJaMN0w8=w120-h120-p-rp-mo-br100" alt="SVG" />
                            <UserComment>Ótima experiência! Profissionais dedicados e atenciosos
                            </UserComment>
                        </UsersCard>
                        <UsersCard>
                            <UserName>João Vitor Pardal</UserName>
                            <img src="https://lh3.googleusercontent.com/a-/ALV-UjW5AjYRT2mU-g6HSculmb_o7vjdAGoYRJWvyo6uqyM5QtN1=w120-h120-p-rp-mo-br100" alt="SVG" />
                            <UserComment>Atendimento nota 10!
                            Profissionais altamente capacitados
                            Recomendo muito!
                            </UserComment>
                        </UsersCard>
                        <UsersCard>
                            <UserName>Marcela Altino</UserName>
                            <img src="https://lh3.googleusercontent.com/a-/ALV-UjXZTGMJ1Yw-W4jKPNJV8Hie8m9aDaU168dAh6vZAIo0pibN=w120-h120-p-rp-mo-br100" alt="SVG" />
                            <UserComment>Excelentes profissionais, muito responsáveis e super educados!
                            </UserComment>
                        </UsersCard>
                        <UsersCard>
                            <UserName>Loraine Lima</UserName>
                            <img src="https://lh3.googleusercontent.com/a-/ALV-UjXov26UMz-cQzJ3LzQghpRj3GWunQQlP_A3of53ZwtTb3qr=w120-h120-p-rp-mo-br100" alt="SVG" />
                            <UserComment>Excelente profissionais, estão sempre esclarecendo dúvidas e orientando da melhor maneira!
                            </UserComment>
                        </UsersCard> */}
                    </Autoplay>
                </CommentsUsers>
            </CommentsSubContainer>
        </CommentsContainer>
    )
}

export default Coments