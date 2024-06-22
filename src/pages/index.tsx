//import Image from "next/image";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });

import Card from "@/components/Card";
import Topo from "@/components/Topo";

const nome = 'Rafael'
let aprende = 'Esta aprendendo'


function calcDesc(v:number,d:number){
  return v-d
}

function calcDesc2(v:number,d:number){
  return v-(d/2)
}


export default function Home() 
{
  return (
    <div>
      <Topo/>
      <div style={testecss}>
           <div style={{color:'#f00', backgroundColor:'#bbb'}}>Inicio</div>
      </div>
    <div className='flex justify-center gap-3' >
           <Card produto={'Mouse'} valor={700} desconto={10} funcao={calcDesc}/>
           <Card produto={'Teclado'} valor={500} desconto={40} funcao={calcDesc2}/>
           <Card produto={'Monitor'} valor={2000} desconto={0} funcao={calcDesc}/>
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
