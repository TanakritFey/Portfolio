import {AiOutlineMenu,AiOutlineHome,AiFillGithub,AiOutlineSolution} from "react-icons/ai";
import {useState} from 'react'
import {BsPersonWorkspace} from 'react-icons/bs'
import {CiMail} from 'react-icons/ci'

// ขั้นตอน 1 : สร้าง Nav Memu
const Sidenav = () => {

const [nav,setNav] = useState(false)

// function handleNav ไปใช้กับ onClick เพื่อให้เปลี่ยนสถานะ
const handleNav = () => {
    setNav(!nav) // ต้องตั้งให้ nav ตรงข้ามกับค่าปัจจุบัน จาก false -> true
    console.log('State Change');    // เช็ค state เมื่อกด ปุ่ม ว่ามีการทำงานและเปลี่ยน สถานะ หรือไม่?
}

    return (
        <div>
          <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
            {
                /* if มากำหนด สถานะของ nav หากเป็นจริงจะให้แสดงแทบ menu ด้านขวา ออกมา */
              nav ? (
                /*  เงื่อนไขจริง : ถ้าหน้าจอเล็กกว่า 1024px จะให้แสดง menu ด้านขวาแทน , h-screen คือ ให้ไปอยู่หน้ากลาง Website */
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">   {/* กำหนด style ให้กับ Navmenu ด้านขวา เมื่อกดคลิกเข้ามาจะให้ แสดงอยู่ตรงกลาง ของ Web */}
                    
                    <a href="#main" 
                    className="w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                       <AiOutlineHome size={20} />
                       <span className="pl-4">Home</span>
                    </a>

                    <a href="#work" 
                    className="w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                       <BsPersonWorkspace size={20} />
                       <span className="pl-4">Work</span>
                    </a>

                    <a href="#project" 
                    className="w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                       <AiFillGithub size={20} />
                       <span className="pl-4">Project</span>
                    </a>

                    <a href="#resume" 
                    className="w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                       <AiOutlineSolution size={20} />
                       <span className="pl-4">Resume</span>
                    </a>

                    <a href="#contact" 
                    className="w-[75%] flex justify-center item-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                       <CiMail size={20} />
                       <span className="pl-4">Contact</span>
                    </a>

                </div>
            )
            :(
                   // เงื่อนไข else เป็นเท็จ : ให้แสดง ค่าว่าง
             ''
            )
            }
            {/* ถ้าขนาดมากกว่า ขนาดหน้าจอ middle 768px ขึ้นไป จะให้แสดงแทบเมนูด้าน ขวา แทน ถ้าต่ำกว่า768px จะซ่อนเมนูด้านซ้าย ให้ไปแสดงเมนูแบบ mobile แทน*/}
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">

                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <AiOutlineHome siza={20}/>
                    </a>

                    <a href="#work" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <BsPersonWorkspace siza={20}/>
                    </a>

                    <a href="#project" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <AiFillGithub siza={20}/>
                    </a>

                    <a href="#resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <AiOutlineSolution siza={20}/>
                    </a>

                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <CiMail size={20}/>
                    </a>

                </div>
            </div>

        </div>
    )
}
export default Sidenav