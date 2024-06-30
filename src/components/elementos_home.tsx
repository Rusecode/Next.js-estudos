

// src/components/elementos_home.tsx

import React, { useEffect, useState } from 'react';

interface Elemento4Props {
    numCards: number;
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

export function elemento4({ numCards }: Elemento4Props): React.ReactElement {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCardIndex(prevIndex => (prevIndex + 1) % numCards);
        }, 6000); // Troca de card a cada 6 segundos

        return () => clearInterval(interval);
    }, [numCards]);

    return (
        <div className='relative h-full w-full overflow-hidden'>
            <div className='absolute inset-0 flex justify-center items-center'>
                <div className='grid grid-cols-1 grid-rows-1 w-full h-full'>
                    {Array.from({ length: numCards }).map((_, index) => (
                        <div
                            key={index}
                            className={`${
                                index === currentCardIndex
                                    ? 'animate-moveCard'
                                    : 'hidden'
                            } absolute top-1/2 transform -translate-y-1/2 w-full flex justify-center items-center`}
                            style={{ zIndex: index === currentCardIndex ? 10 : 1 }}
                        >
                            <div className='bg-blue-500 text-white p-4 rounded-lg shadow-lg w-64 h-32 flex items-center justify-center'>
                                Card {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
