import developer from '../assets/home-image.webp'

const Home = () =>{
    return(
        <div id='home' className='flex justify-center h-screen items-center gap-x-80 flex-wrap'>
            <div className=''>
              <h2 className=' text-3xl py-4 font-[cursive]'>Hello there!</h2>
              <h2 className=' text-3xl py-4 font-[cursive]'>I'M <span className='text-[#c77dff]'>Suraj Kushwaha</span></h2>
              <h2 className=' text-3xl py-4 font-[cursive]'>Web <span className='text-[#087e8b]'>Developer</span></h2>
              <div className='text-white py-4'>
                <button className='w-[120px] h-12  bg-black rounded-lg mx-4 '><a href='#about'>About Me</a></button>
                <button className='w-[120px] h-12 bg-black rounded-lg mx-4'>
                  <a href='#contact'>Contact</a>
                </button>
              </div>
            </div>
            <div>
            <img src={developer} className='rounded-2xl' width={800}/>
            </div>
        </div>
    )
}

export default Home