import { Container, Row, HomeBtn, Btn } from './style';

const Header = () => {
    return (
        <Container>
            <div> bloco01 </div>
            <Row>
                <HomeBtn>Home</HomeBtn>
                <Btn>Entrar</Btn>
                <Btn>Cadastrar</Btn>
            </Row>
        </Container>
    )
}

export { Header }