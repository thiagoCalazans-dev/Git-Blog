import { CardContainer, Content } from "./styles";
import { ArrowSquareOut } from "phosphor-react"

export function UserCard() {
    return (
        <CardContainer>
            <img src="https://github.com/thiagoCalazans-dev.png" alt="imagem do usuario" />
            <Content>
                <header>
                    <strong>NOME USUARIO</strong>
                    <a href="https://github.com/thiagoCalazans-dev/">github<ArrowSquareOut weight="bold" /></a>
                </header>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum animi nobis modi similique maxime obcaecati nulla in, voluptatem ad pariatur praesentium quisquam architecto perferendis iste! Rem, enim officiis. Aperiam, pariatur!</p>
                <footer><span>info 1</span><span>info 2</span><span>info 3</span></footer>
            </Content>
        </CardContainer>
    )
}