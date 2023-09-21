import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaLinkedin, FaTwitter,FaFacebook } from 'react-icons/fa'
import fey from '../Img/fey.svg'

// ขั้นตอนที่ 2 : สร้าง hero ที่แสดงภาพด้านบนสุดของ Web
const Main = () => {

    return (
        <div id='main'>
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" 
            src="https://cdn.pixabay.com/photo/2020/06/30/13/13/man-5356316_1280.jpg" alt="/" />
            {/* Overlay */}
            <div className="w-full h-screen absolute top-0 bg-white/30">
                {/* text ที่ทับรูปภาพ */}
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                  
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 mt-10 mx-auto'>I'm Tanakrit Sonsue</h1>
                    
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800 mx-auto'>
                        I'm a
                    {/* Import Animation มาใช้กับ ชื่อของเรา */}
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Junior Software Developer',
                            2000, // wait 1s 
                            'Coder',
                            2000, // wait 2s
                            'Tech Enthusiast',
                            2000, // wait 2s
                
                        ]}
                        wrapper="div"
                        cursor={true}
                        style={{ fontSize: '1em', paddingLeft:'5px' }}
                        repeat={Infinity}
                        />
                    </h2>
                     {/* img profiles */}
                     <img className='w-[25rem] rounded-full my-6 shadow-2xl shadow-slate-950 mx-auto' src={fey} alt="profile-img" />
                   
                    <p className='text-center text-lg text-white w-full h-screen'>I am a graduate of Generation Thailand Junior Software Developer Bootcamp, and I have experience in Digital Marketing for 4 years. I got better at planning, working in teams, and leading teams. I want to be a Junior FullStack Software Developer. I am excited to use my special skills to make new and smart ideas that connect technology and how people use it.</p>

                    <div className='flex justify-between text-center  pt-6 max-w-[200px] w-full h-full'>
                        <FaTwitter className='cursor-pointer' size={20}/>
                        <FaFacebook className='cursor-pointer' size={20}/>
                        <FaInstagram className='cursor-pointer' size={20}/>
                        <FaLinkedin className='cursor-pointer' size={20}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Main