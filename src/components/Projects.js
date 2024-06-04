import websiteImg1 from "../assets/resume-builder.png";
import websiteImg2 from "../assets/portfolio-website.png";
import websiteImg3 from "../assets/accessories-ecommerce.png";

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Resume Builder Website. Built with Java script,Bootstrap.',
                link: 'https://online-resume-builder-website.netlify.app/'
            },
            {
                image: websiteImg2,
                description: 'A Portfolio Website. Built with React.js and Tailwind CSS.',
                link: 'https://sriramk-portfolio-website-project.netlify.app/'
            },
            {
                image: websiteImg3,
                description: 'A Ecommerce Website. Built with HTML, CSS, Java script.',
                link: 'https://mobile-accessories-website.netlify.app/'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-primary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with HTML,Tailwind CSS, Bootstrap, Java script, React. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}