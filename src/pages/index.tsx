//import Image from "next/image";
//import { Inter } from "next/font/google";
//const inter = Inter({ subsets: ["latin"] });

import Card from "@/components/Card";
import Topo from "@/components/Topo";




const nome = 'Rafael';
let aprende = 'Esta aprendendo';


export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div style={{ color: '#f00', backgroundColor: '#bbb' }}>Inicio</div>
      </div>
     
    </div>
  )
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Corrigido de alignItens para alignItems
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px',
};
