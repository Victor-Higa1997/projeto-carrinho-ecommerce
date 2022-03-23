import { useEffect, useState } from "react"
import { AcessoAPI } from "../../services/AcessoAPI"
import { ButtonFCompra, DivValorTotal, H4, Main, PValorTotal, Section } from "../../styles/Carrinho.style"
import { Produto } from "../Produto"

export const Carrinho = () => {

    const [produto, setProduto] = useState([])
    const [valorTotal, setValorTotal] = useState([])
    
    useEffect(() => {
        (async () => {
            const data = AcessoAPI('http://localhost:5003/items')
            const produtos = await data
            setProduto(produtos)

            const data2 = await AcessoAPI('http://localhost:5001/totalizers')
            const valores = await data2

            setValorTotal(valores[1].value + valores[0].value)
            
        })()

    }, [])

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
                        <PValorTotal>Total</PValorTotal>
                        <PValorTotal>{(valorTotal/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</PValorTotal>
                    </DivValorTotal>

                    <ButtonFCompra>Finalizar compra</ButtonFCompra>

                </Section>
            </Main>
        </>
    )
}