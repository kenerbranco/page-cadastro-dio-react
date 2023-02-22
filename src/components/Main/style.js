import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: flex-start;

    width: 100%;
    height: 100%;
`

export const Text = styled.div`
    width: 388px;
    height: 308px;
    margin-top: 100px;

    font-size: 32px;
`

export const Form = styled.form`
    width: 374px;
    height: 450px;
    margin-top: 100px;
`

export const FormTitle = styled.h2`
    margin-left: 5px;
`

export const FormP = styled.p`
    padding: 8px 0px;    
`

export const ContainerInput = styled.div`
    margin-top: 30px;
    color: #8647AD;
`

export const BoxInput = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 300px;
    height: 30px;
    margin-left: 5px;
    font-size: 1.3em;
`

export const FormInput = styled.input`
    width: 220px;
    height: 22px;
    margin-left: 5px;
    color: #ffffff;
    background: transparent;
    border: none;
    border-bottom: 2px solid #8647AD;
`

export const FormButton = styled.button`
    margin: 40px 0px;
    width: 264px;
    height: 27px;
    color: #ffffff;
    background: #E4105D;
    border: none;
    border-radius: 27px;

    outline: 1px solid #E4105D;
    outline-offset: 3px;

    &:hover {
        outline: 2px solid #ffffff;
        cursor: pointer;
    }
`

export const FormSubP = styled.p`
    font-size: 0.8em;
`

export const FormStrong = styled.strong`
    color: #23DD7A;
`