
import react from '../assets/react.png'
import js from '../assets/js.png'
import html from '../assets/html-5.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind css icon.png'
import resume from '../assets/Resume 1 suraj.pdf'



const About = () =>{
    return(
        <div id='about' className="text-center pt-40">
            <div className="flex flex-col justify-center w-[50%] ml-20">
                <h2 className="text-3xl font-semibold m-7">Get to know me</h2>
               <p className="text-start text-2xl  p-3">Hi, my name is <span className="text-black">Suraj Kushwaha</span> and I am from Uttar Pradesh ,
               Ghazipur. I'm a <span className="text-black">Frontend web developer</span>  and a third year university student
               pursuing <span className="text-black">Bachelor of Computer Application </span>from Lucknow.</p>
               <p className="text-start text-2xl p-3">I love to create projects with beautiful designs and put my own twists
                on it, you can check out some of my work in the project section
               </p>
               <p className="text-start text-2xl p-3 ">As a fresher, I am enthusiastic about the opportunity to apply my knowledge in real-world scenarios and 
                contribute to creating exceptional user experiences.</p>
                <a href={resume}>
                <button className="bg-black text-white px-6 py-3 rounded-2xl
                 hover:bg-[#0f4c5c] hover:text-white transition duration-300">Download Resume</button>
                </a>
            </div>
            <div className='mt-24'>
                <h2 className="text-3xl font-semibold mb-16">Skillset</h2>
                <div className='flex justify-center gap-x-20 mt-10 mb-5 flex-wrap'>
                      <img className='hover:scale-110 transition-all duration-300' src={html} width={70}/>
                      <img className='hover:scale-110 transition-all duration-300' src={css} width={70}/>
                      <img className='hover:scale-110 transition-all duration-300' src={js} width={70}/>
                      <img className='hover:scale-110 transition-all duration-300' src={tailwind} width={70}/>
                      <img className='hover:scale-110 transition-all duration-300' src={react} width={70}/>
                </div>
            </div>
        </div>
    )
}

export default About