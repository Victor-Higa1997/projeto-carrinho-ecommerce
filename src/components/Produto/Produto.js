import { DivCesta, DivDescProduto, ImgProduto, SpanTituloProduto, SpanValorDescontoProduto, SpanValorProduto } from "../../styles/Produto.style"


export const Produto = ({valor, indice}) =>{
    return(
        <>
            <DivCesta>
                {console.log(indice)}
                {console.log(valor[indice].name)}
                
                <ImgProduto src={valor[indice].imageUrl}/>
                <DivDescProduto>
                    <SpanTituloProduto>{valor[indice].name}</SpanTituloProduto>
                    <SpanValorProduto>{(valor[indice].price/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</SpanValorProduto>
                    <SpanValorDescontoProduto>{(valor[indice].sellingPrice/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</SpanValorDescontoProduto>
                </DivDescProduto>
            </DivCesta>
        </>
    )
}