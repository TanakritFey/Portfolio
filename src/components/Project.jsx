import ProjectItem from './ProjectItem'
import buger from '../Img/burger.jpg'
import colmar from '../Img/colmar.jpg'
import countdown from '../Img/countdown.jpg'

function Project() {
  return (
    <div id='projects' className='w-full flex justify-center m-auto md:pl-20 p-4 py-16 bg-[#6499E9]'>
      <div className='max-w-[1040px]'>
        <div className='text-center'>
        <h1 className='font-Bangers text-6xl font-bold text-center text-white inline border-b-4'>Projects</h1>
        </div>
        <p className='text-center py-8 font-Nanum text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
             ex tempore minus doloribus accusamus mollitia eveniet officia
              hic sunt suscipit quae non dolore, quis, 
            officiis ullam rerum eos laudantium soluta.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={buger} title='MiniMart Website' />
            <ProjectItem img={buger} title='Website' />
            <ProjectItem img={colmar} title='Colmar Website' />
            <ProjectItem img={countdown} title='Countdown to New Year 2024' />

        </div>
        </div>
    </div>
  )
}

export default Project