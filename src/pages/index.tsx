//import Image from "next/image";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });

import Card from "@/components/Card";
import Topo from "@/components/Topo";

const nome = 'Rafael'
let aprende = 'Esta aprendendo'





export default function Home() 
{
  return (
    <div>
      <Topo/>
      <div style={testecss}>
      <div style={{color:'#f00', backgroundColor:'#bbb'}}>Inicio</div>
      </div>
    <div className='flex justify-center gap-3' >
      <Card produto={'Mouse'} valor={700} desconto={10}/>
      <Card produto={'Teclado'} valor={500} desconto={40} />
      <Card produto={'Monitor'} valor={2000} desconto={0} />
    </div>
    </div>
  )
}

const testecss={
  display:'flex',
  justifyContent:'center',
  alignItens:'center',
  color:'#00f',
  backgroundColor:'#eee',
  fontSize:'20px'
}
