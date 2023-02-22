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
        FormStrong,
        BoxInput,
        ContainerInput 
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
                <ContainerInput>
                    <BoxInput>
                        <MdOutlinePersonOutline />
                        <FormInput placeholder='Nome Completo'></FormInput>
                    </BoxInput>
                    <BoxInput>
                        <MdMailOutline />
                        <FormInput placeholder='E-mail'></FormInput>
                    </BoxInput>
                    <BoxInput>
                        <MdLockOutline />
                        <FormInput placeholder='Senha'></FormInput>
                    </BoxInput>
                </ContainerInput>
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