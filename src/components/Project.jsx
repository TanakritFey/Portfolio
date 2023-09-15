import ProjectItem from './ProjectItem'
import buger from '../Img/burger.jpg'
import colmar from '../Img/colmar.jpg'
import countdown from '../Img/countdown.jpg'

function Project() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
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
  )
}

export default Project