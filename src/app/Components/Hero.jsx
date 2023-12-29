"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-slate-100 mb-4 text-4xl lg:text-6xl font-extrabold '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            Hai, Saya {""}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Onggi Sanjaya',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Engginer',
                                1000,
                                'Web Development',
                                1000,
                                'Mobile Website',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-slate-200 text-base sm:text-lg mb-6 lg:text-xl'>Saya Seorang Engginer, Dalam Website ini saya sedang menggunakan nextjs</p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white '> Contact Me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[450px] h-[450px] relative">
                        <Image
                            src='/images/onggi.png'
                            alt='onggi.png'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/4 left-1/2'
                            width={300}
                            height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
