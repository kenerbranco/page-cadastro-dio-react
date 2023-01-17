import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 47px;
    background-color: #151515;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    margin-right: 40px;
`

export const HomeBtn = styled.a`
    width: 60px;
    height: 22px;
    font-size: 1.1em;
    text-align: center;
    margin-right: 6px;
    margin-left: 6px;
`

export const Btn = styled.a`
    width: 120px;
    height: 22px;
    font-size: 1.1em;
    text-align: center;
    border-radius: 11px;
    background-color: #565656;
    margin-right: 6px;
    margin-left: 6px;
`

export const Img = styled.img`
    width: 63px;
    heigth: 25px;
    margin-left: 34px;
`