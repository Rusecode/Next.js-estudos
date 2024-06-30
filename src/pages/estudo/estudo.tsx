
// src/pages/Home.tsx

import React from 'react';
import { elemento1, elemento2, elemento3, elemento4 } from '@/components/elementos_home';

export default function Home() {
    return (
        <div className='relative h-screen w-full'>
            <div className='absolute inset-0 bg-[#0c88ef] border-4 opacity-60 border-black z-0'></div>
            <div className='relative h-full w-full gap-4 p-4 grid grid-cols-3 grid-rows-3 z-10'>
                <div className='col-span-1 row-span-3 w-full h-full bg-[#7dd1fb] border-4 opacity-70 shadow-xl rounded-lg'>
                    {elemento1()}
                </div>
                <div className='col-span-2 row-span-2 w-full h-full bg-[#7dd1fb] border-4 opacity-70 shadow-xl rounded-lg'>
                    {elemento2()}
                </div>
                <div className='w-full h-full bg-[#7dd1fb] rounded-lg opacity-70 border-4 shadow-xl'>
                    {elemento3()}
                </div>
                <div className='w-full h-full bg-[#7dd1fb] rounded-lg opacity-70 border-4 shadow-xl'>
                    <div className='grid-container'>
                        <elemento4 numCards={5}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
