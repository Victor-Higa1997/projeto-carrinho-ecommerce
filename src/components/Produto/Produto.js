import { DivCesta, DivDescProduto, DivProduto, DivProdutoDesc, ImgProduto, ProdutoImg, PTituloProduto, PValorDescontoProduto, PValorProduto, SpanTituloProduto, SpanValorDescontoProduto, SpanValorProduto } from "../../styles/Produto.style"


export const Produto = () =>{
    return(
        <>
            <DivCesta>
                <ImgProduto/>
                <DivDescProduto>
                    <SpanTituloProduto>Trufa de morango</SpanTituloProduto>
                    <SpanValorProduto>R$ 1,23</SpanValorProduto>
                    <SpanValorDescontoProduto>R$ 1,11</SpanValorDescontoProduto>
                </DivDescProduto>
            </DivCesta>
        </>
    )
}