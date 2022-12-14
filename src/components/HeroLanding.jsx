import React from 'react'

const HeroLanding = () => {
    return (
        <>
            <img className='absolute md:top-32 top-48 -left-40' src="/images/pattern-rings.svg" />
            <section className='page-wrapper flex md:flex-row flex-col-reverse items-center justify-between md:pb-0 pb-7'>
                <div className='md:text-left text-center md:mt-[134px] mt-[40px] relative z-10'>
                    <h1 className=' md:text-[80px] text-[32px] leading-none'>Nice to <br className='xl:hidden md:block hidden' /> meet you! <br className='xl:block md:hidden block' /> I'm  <span className='border-b border-green-500'><br className='xl:hidden md:block hidden'/>Adam Keyes</span>.</h1>
                    <p className='md:max-w-[350px] w-[300px] md:text-[18px] text-[16px] md:mx-0 mx-auto py-[50px]'>Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.</p>
                    <button className='uppercase border-b border-green-500 md:text-[24px] text-[16px]'>
                        Contact Me
                    </button>
                </div>
                <div className='md:max-w-[500px] max-w-[350px] md:absolute -top-20 lg:right-0 -right-24  '>
                    <img className=' w-full' src={'/images/image-profile-desktop.webp'} alt="my_image" />
                    <img className='absolute bottom-32 -left-16' src="/images/pattern-circle.svg" />
                </div>
            </section>
        </>
    )
}

export default HeroLanding