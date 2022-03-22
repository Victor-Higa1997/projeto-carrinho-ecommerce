import styled from "styled-components";

export const Main = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid black;
    background-color: #F0F8FF;
`
export const Section = styled.section`
    height: 89%;
    width: 24%;
    border-radius: 8px;
    box-shadow: 1px 1px 18px grey;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const H3 = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-bottom: 0.2rem solid lightgrey;
    margin: 0;
    height: 9%;
    width: 100%;
`
export const DivValorTotal = styled.div`
    width: 100%;
    height: 10%;
    border-bottom: 0.2rem solid lightgrey;
    border-top: 0.2rem solid lightgrey;
    display: flex;
    flex-direction: row;
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
    height: 8%;
    width: 89%;
    border-radius: 5px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    background-color: #2086d8;
    color: white;
    border: none;
    margin: 15px 0 15px 0;
    cursor: pointer;
`





