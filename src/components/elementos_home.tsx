// pages/estudo/componentes.tsx

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Importando as imagens usando next/image
import Bitcoin from '../../images/Bitcoin.png';
import Cardano from '../../images/Cardano.png';
import Ethereum from '../../images/Ethereum.png';
import Solana from '../../images/Solana.png';
import Toncoin from '../../images/Toncoin.png';

// Criando um objeto com as imagens e textos associados
const images = {
    Bitcoin: {
        src: Bitcoin.src,
        texto: 'O que é Bitcoin e como funciona essa criptomoeda?\n\nBitcoin é a primeira moeda digital criada. Funciona em uma tecnologia descentralizada que permite transações diretas entre usuários, sem a necessidade de intermediários como bancos.',
        classe: 'text-bitcoin'
    },
    Cardano: {
        src: Cardano.src,
        texto: 'O que é Cardano (ADA) e como funciona essa criptomoeda?\n\nCardano é uma plataforma blockchain projetada para mudar a maneira como as transações financeiras e contratos digitais são feitos. É conhecida por sua segurança e escalabilidade.',
        classe: 'text-cardano'
    },
    Ethereum: {
        src: Ethereum.src,
        texto: 'O que é Ethereum (ETH) e como funciona essa criptomoeda?\n\nEthereum é uma plataforma de software open source baseada em blockchain que permite aos desenvolvedores construir e implantar aplicativos descentralizados (dApps) e contratos inteligentes.',
        classe: 'text-ethereum'
    },
    Solana: {
        src: Solana.src,
        texto: 'O que é Solana (SOL) e como funciona essa criptomoeda?\n\nSolana é uma plataforma de Blockchain para criação de DApps, NFTs e ativos digitais. Sua criptomoeda SOL é procurada por investidores que desejam contar com ativos bem fundamentados em sua carteira.',
        classe: 'text-solana'
    },
    Toncoin: {
        src: Toncoin.src,
        texto: 'O que é Toncoin e como funciona essa criptomoeda?\n\nToncoin é uma criptomoeda baseada em tecnologia blockchain que se destaca pela sua rapidez e eficiência em transações. É utilizada principalmente como um meio de pagamento digital.',
        classe: 'text-toncoin'
    },
};

interface Elemento4Props {
    images: { [key: string]: { src: string; texto: string; classe: string } }; // Passa o objeto de imagens como prop
}

export function elemento1() {
    return (
        <div>a</div>
    );
}

export function elemento2() {
    return (
        <div>a</div>
    );
}

export function elemento3() {
    return (
        <div>a</div>
    );
}

export function Elemento4({ images }: Elemento4Props): React.ReactElement {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const numCards = Object.keys(images).length; // Número de imagens

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex(prevIndex => (prevIndex + 1) % numCards);
        }, 12000); // Troca de card a cada 12 segundos

        return () => clearInterval(interval);
    }, [numCards]);

    const highlightCryptoNames = (text: string, classe: string) => {
        const cryptoNames = Object.keys(images);

        // Regex para encontrar apenas o nome da criptomoeda
        const regex = new RegExp(`\\b(${cryptoNames.join('|')})\\b`, 'gi');

        // Substitui apenas o nome da criptomoeda pelo span com a classe apropriada
        const highlightedText = text.replace(regex, match => `<span class="${images[match].classe}">${match}</span>`);

        return highlightedText;
    };

    return (
        <div className='relative h-full w-full overflow-hidden'>
            <div className='absolute inset-0 flex justify-center items-start'>
                <div className='grid grid-cols-1 grid-rows-1 w-full h-full relative'>
                    {Object.values(images).map((image, index) => (
                        <div
                            key={index}
                            className={`${
                                index === currentCardIndex
                                    ? 'block'
                                    : 'hidden'
                            } absolute left-0 w-full flex justify-start items-center`}
                            style={{ 
                                zIndex: index === currentCardIndex ? 10 : 1,
                                animation: index === currentCardIndex ? 'moveCards 12s linear infinite' : 'none'
                            }}
                        >
                            <div className='bg-blue-500 text-white p-4 rounded-lg shadow-lg w-64 h-32 flex items-center justify-center m-4'>
                                <Image src={image.src} alt={`Card ${index + 1}`} width={64} height={64} objectFit="contain" />
                            </div>
                        </div>
                    ))}
                    {/* Contêiner para o texto */}
                    <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-gray-200 p-4 overflow-y-auto">
                        <div className="h-full flex flex-col justify-center">
                            {Object.values(images).map((image, index) => (
                                <div key={index} className={`mb-4 ${index === currentCardIndex ? 'block' : 'hidden'}`}>
                                    <h2 className="text-xl font-bold mb-2">{Object.keys(images)[index]}</h2>
                                    <p className="text-base" dangerouslySetInnerHTML={{ __html: highlightCryptoNames(image.texto, image.classe) }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Exportando o objeto images para uso em outros arquivos
export { images };