import { AcessoAPI } from "../../services/AcessoAPI"
import { ButtonFCompra, DivValorTotal, H3, Main, PValorTotal, Section } from "../../styles/Carrinho.style"
import { Produto } from "../Produto"

export const Carrinho = () =>{

    AcessoAPI()


    return(
        <>
            <Main>
                <Section>
                    <H3>Meu carrinho</H3>

                    <Produto />
                    
                    <DivValorTotal>
                        <PValorTotal>Total</PValorTotal>
                        <PValorTotal>R$ 9,55</PValorTotal>
                    </DivValorTotal>
                    
                    <ButtonFCompra>Finalizar compra</ButtonFCompra>

                </Section>
            </Main>
        </>
    )
}