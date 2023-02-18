import { Container, Row, HomeBtn, Btn, Img } from './style';
import logoDio from '../../assets/images/logo.png';

const Header = () => {
    return (
        <Container>
            <Img src={logoDio} alt='logo dio' />
            <Row>
                <HomeBtn>Home</HomeBtn>
                <Btn>Entrar</Btn>
                <Btn>Cadastrar</Btn>
            </Row>
        </Container>
    )
}

export { Header };