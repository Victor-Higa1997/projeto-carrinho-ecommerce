import styled from "styled-components";

export const Main = styled.main`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Section = styled.section`
    height: auto;
    width: 352px;
    border-radius: 8px;
    box-shadow: 1px 1px 18px grey;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5% 0 5% 0;
`
export const H4 = styled.h4`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-bottom: 0.15rem solid lightgrey;
    margin: 0;
    height: 50px;
    width: 100%;
`
export const DivValorTotal = styled.div`
    width: 100%;
    height: auto;
    border-bottom: 0.1rem solid lightgrey;
    border-top: 0.1rem solid lightgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`
export const PValorTotal = styled.p`
    font-weight: bold;
    margin-top: 0;
    margin: 2px 17px 0 17px;
`
export const ButtonFCompra = styled.button`
    height: 45px;
    width: 89%;
    border-radius: 5px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    background-color: #2086d8;
    color: white;
    border: none;
    margin: 15px 0 15px 0;
    cursor: pointer;
    transition: 0.2seg;
    &:hover{
        height: 47px;
        width: 91%;
        font-size: 15px;
    }
`
export const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 14px 0 14px 0;
`
export const DivFrete = styled.div`
    width: 100%;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`

export const SpanFreteGratis = styled.span`
    height: 28px;
    width: 78%;
    border-radius: 23px;
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    background-color: #b3ff99;
    color: #134d00;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ButtonOpcaoCesta = styled.button`
    position: absolute;
    height: 45px;
    width: 100px;
    border-radius: 5px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    background-color: grey;
    color: white;
    border: none;
    cursor: pointer;
    top: 30px;
    left: 17%;
    transition: 0.2s;
    &:hover{
        height: 50px;
        width: 105px;
        font-size: 15px;
        background-color: white;
        color: grey;
        border: 0.1rem solid black;
    }
`
