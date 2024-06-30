import Card from "./Card";
import Link from "next/link";
import estudo from "@/pages/estudo/estudo";

export default function Topo(){
    return(
        <div className='flex flex-col justify-between items-center bg-indigo-500 h-[130px] '>
        <div>logo</div>
        <div className="flex flex-col justify-center items-center">
          <div className='text-3xl'> Rafael </div>
          <div className='subtituloTopo'>Medeiros</div>
        </div>
        
        <nav className="flex gap-5">
             <Link href={"/"}>
                 Home
             </Link>
             <Link href={
              {
                pathname:"/produtos/produtos",
                query:{
                       nome:'Rafael',
                       curso:'React Next'
                }
              }
              
              }>
                produtos
             </Link>
             <Link href={"/teste/teste"}>
                 Teste
             </Link>
             <Link href={"/usestate/usestate"}>
                 State
             </Link>
             <Link href={"/estudo/estudo"}>
                 estudo
             </Link>
        </nav>

        
        </div>
    )}
