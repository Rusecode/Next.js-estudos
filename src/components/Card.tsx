interface CardProps{
   produto: string,
   valor: number,
   desconto: number
   funcao: (valor: number, desconto: number) => number;
}  

//Os elementos de uma props sempre vem do pai para o filho, ou seja elas são criadas aonde vão ser chamadas e não aonde vão ser exportadas

export default function Card(props:CardProps){
    return(
        <div className={`flex justify-center flex-col border-4 ${props.desconto>0? 'border-red-700' : 'border-blue-700'} rounded-sm p-1`}>
            <div>Produto:{props.produto}</div>
            <div>Valor:{props.valor}</div>
            {props.desconto>0?(<div>
                <div>Desconto:{props.desconto}</div>
               
            </div>):'Sem desconto'}
            <div>Valor final:{props.funcao(props.valor,props.desconto)}</div>
        </div>
    )
}