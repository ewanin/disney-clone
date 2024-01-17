import Logo from '../assets/Images/logo-d-plus.svg'
import { BiUserCircle, BiSearch, BiHomeAlt2, BiTv, BiCameraMovie, BiTennisBall, BiCategory } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";

import HeaderItems from './HeaderItems'

const Header = () => {

    const menu = [
        { name: 'My Space', icon: BiUserCircle },
        { name: 'Search', icon: BiSearch },
        { name: 'Home', icon: BiHomeAlt2 },
        { name: 'TV', icon: BiTv },
        { name: 'Movies', icon: BiCameraMovie },
        { name: 'Sports', icon: BiTennisBall },
        { name: 'Categories', icon: BiCategory }
    ]

  return (
      <div className='bg-[#01014] bg-opacity-80 from-30% md:bg-gradient-to-r bg-gradient-to-b from-gradCol md:w-fit w-screen md:h-screen h-fit flex md:flex-col flex-row justify-between items-center pl-2 pr-0 pt-5 fixed'>
        <div className='bg-rd-500 h-[20%]'>
              <img src={Logo} alt="Logo" className='m-auto md:w-[80px] w-[60px] md:h-[60px] h-[40px] md:mb-5 mb-2 cursor-pointer' />
            <div className='flex items-center text-[#ffcc75] hover:text-opacity-100 text-opacity-80 bg-[#ffcc75] hover:bg-opacity-50 bg-opacity-20 md:text-[16px] text-[12px] md:px-2 px-1 md:py-1 py-0 rounded-full'>
                <span>Subscribe</span>
                <MdKeyboardArrowRight />
            </div>
        </div>
        <div className='h-[80%] w-[100%] text-white md:pl-10 pl-2 md:pr-16 pr-0 '>
            <div className='flex md:flex-col flex-row justify-evenly bg-yellw-500 h-[80%] '>
                {menu.map((item) => (
                    <HeaderItems 
                    key={item.name}
                    Icon = {item.icon}
                    Name = {item.name}
                    /> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header