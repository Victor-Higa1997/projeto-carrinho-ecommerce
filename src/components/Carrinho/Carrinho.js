import { useEffect, useState } from "react"
import { AcessoAPI } from "../../services/AcessoAPI"
import { ButtonFCompra, ButtonOpcaoCesta, Div, DivFrete, DivValorTotal, H4, Main, PValorTotal, Section, SpanFreteGratis } from "../../styles/Carrinho.style"
import { Produto } from "../Produto"

export const Carrinho = () => {

    const [produto, setProduto] = useState([])
    const [valorTotal, setValorTotal] = useState([])
    const [carrinho, setCarrinho] = useState(true)

    useEffect(() => {
        (async () => {
            if(carrinho === true){
                const data = AcessoAPI('http://localhost:5001/items')
                const produtos = await data
                setProduto(produtos)
                
                const data2 = await AcessoAPI('http://localhost:5001/totalizers')
                const valores = await data2
    
                setValorTotal(valores[1].value + valores[0].value)
            }else{
                const data = AcessoAPI('http://localhost:5000/items')
                const produtos = await data
                setProduto(produtos)
                
                const data2 = await AcessoAPI('http://localhost:5000/totalizers')
                const valores = await data2
    
                setValorTotal(valores[1].value + valores[0].value)

            }


        })()
    }, [carrinho])

    /* 
        useEffect(() => {
            (async () => {
                
            })()
        }, []) */

    return (
        <>
            {console.log(valorTotal[0])}
            {console.log()}
            {/* {console.log(valorTotal[0].value)} */}

            <Main>
                <Section>
                    <H4>Meu carrinho</H4>

                    {
                        produto.map((valor, indice) => {
                            return <Produto key={indice} valor={produto} indice={indice} />
                        }
                        )
                    }


                    <DivValorTotal>
                        <Div>
                            <PValorTotal>Total</PValorTotal>
                            <PValorTotal>{(valorTotal / 100).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</PValorTotal>
                        </Div>
                        {
                        (valorTotal / 100) > 10? 
                        <DivFrete>                 
                            <SpanFreteGratis>Parabéns, sua compra tem frete grátis !</SpanFreteGratis> 
                        </DivFrete>
                        :
                            null
                        }
                    </DivValorTotal>

                    <ButtonFCompra>Finalizar compra</ButtonFCompra>

                </Section>

                <ButtonOpcaoCesta onClick={() => carrinho === true ? setCarrinho(false) : 
                    setCarrinho(true)}>{carrinho === true ? "Carrinho 1" : "Carrinho 2"}</ButtonOpcaoCesta>
                {console.log(carrinho)}
            </Main>
        </>
    )
}