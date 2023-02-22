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
    box-sizing: border-box;
    width: 60px;
    height: 22px;
    font-size: 1em;
    text-align: center;
    margin-right: 6px;
    margin-left: 6px;
    padding-top: 3px;

    &:hover {
        cursor: pointer;
    }
`

export const Btn = styled.a`
    box-sizing: border-box;
    width: 120px;
    height: 22px;
    font-size: 1em;
    text-align: center;
    border-radius: 11px;
    background-color: #565656;
    margin-right: 6px;
    margin-left: 6px;
    padding-top: 3px;

    &:hover {
        outline: 2px solid #ffffff;
        cursor: pointer;
    }
`

export const Img = styled.img`
    width: 63px;
    heigth: 25px;
    margin-left: 34px;

    &:hover {
        outline: 2px solid #ffffff;
        cursor: pointer;
    }
`