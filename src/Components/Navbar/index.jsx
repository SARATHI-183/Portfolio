import { useState } from "react"
import { Link } from "react-scroll"
import { FaTimes } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci"
import { DiCssdeck } from 'react-icons/di'

const Navbar = () => {

    const [ click, setClick] = useState(false)
    const handleClick = () =>{
        setClick(!click)
    }

    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                {/* <Link to="Home">
                    <li>Home</li>
                </Link> */}
                <a spy={true} smooth={true} href="#about">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">About</li>
                </a>
                <a spy={true} smooth={true} href="#skills">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">Skills</li>
                </a>
                <a spy={true} smooth={true} href="#projects">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">Projects</li>
                </a>
                <a spy={true} smooth={true} href="#education">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">Education</li>
                </a>
                <a spy={true} smooth={true} href="#contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded ">Contact</li>
                </a>
            </ul>
        </div>
    </>


  return (
    
        <div className=" flex justify-center   items-center h-[80px] top-0 z-50 bg-slate-900  sticky">
            <div className=" flex  md:justify-between h-[60px] w-full z-1 text-white  px-[24px] py-0 max-w-[1200px]">
                <div className="flex items-center justify-start w-full px-0 md:px-[6px]  ">
                    {/* <span className="text-3xl font-bold">
                        Logo
                    </span> */}
                    
                    <a  className="flex items-center justify-center text-white  cursor-pointer px-0" >
                        <DiCssdeck size="3rem"/> <span className="px-[4px] font-bold text-[18px]">Portfolio</span>
                    </a>
                </div>
                <div className="md:flex items-center justify-end font-normal hidden">
                    
                        <ul className="gap-8 text-[18px] flex justify-center items-center w-full md:px-[6px]">
                            {/* <Link to="Home"  className="cursor-pointer px-4">
                                <li>Home</li>
                            </Link> */}
                            <a  spy={true} smooth={true} href="#about">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>
                            </a>
                            <a  spy={true} smooth={true} href="#skills">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Skills</li>
                            </a>
                            <a  spy={true} smooth={true} href="#projects">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Projects</li>
                            </a>
                            <a spy={true} smooth={true}  href="#education">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Education</li>
                            </a>
                            <a spy={true} smooth={true}  href="#contact">
                                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contact</li>
                            </a>
                        </ul>
                    
                </div>
                <div>
                    {click && content}
                    
                </div>
                <button className="block sm:hidden transition " onClick={handleClick}>
                    {click ? <FaTimes size="25px"/> : <CiMenuFries size="25px"/>}
                </button>
            </div>
        </div>
    
  )
}

export default Navbar