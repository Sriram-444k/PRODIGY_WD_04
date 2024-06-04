import AboutImg from '../assets/about.png';

export default function About() {
    const config = {
        line1: ' Hi! I am Sriram. I am a Front-end Developer. I built beautiful and attractive websites with React.js, Tailwind CSS + Bootstrap',
        line2: 'I am a dedicated and discipline person and also adoptable in any environment. Flexible person and a team player.',
        line3: 'I am proficient in Front-end skills like HTML, Tailwind CSS, Java script, React.js and many more.'
      }

    return <section className='flex flex-col md:flex-row bg-primary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-[#fc9b63] mb-5 w-[180px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>       
    </section>
}