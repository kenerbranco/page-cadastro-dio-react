import { 
        MdOutlinePersonOutline, 
        MdMailOutline,
        MdLockOutline
        } from "react-icons/md";
import { 
        Container, 
        Text, 
        Form, 
        FormTitle, 
        FormP, 
        FormInput, 
        FormButton, 
        FormSubP, 
        FormStrong 
        } from './style';

const Main = () => {
    return (
        <Container>
            <Text>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Text>
            <Form>
                <FormTitle>Comece agora grátis</FormTitle>
                <FormP>
                    Crie sua conta e make the change._
                </FormP>
                <FormP>
                    <MdOutlinePersonOutline />
                    <FormInput placeholder='Nome Completo'></FormInput>
                </FormP>
                <FormP>
                    <MdMailOutline />
                    <FormInput placeholder='E-mail'></FormInput>
                </FormP>
                <FormP>
                    <MdLockOutline />
                    <FormInput placeholder='Senha'></FormInput>
                </FormP>
                <FormButton>Criar minha conta</FormButton>
                <FormP>
                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </FormP>
                <FormSubP>
                    Já tenho uma conta. <FormStrong>Fazer login</FormStrong>
                </FormSubP>
            </Form>
        </Container>
    )
}

export { Main };