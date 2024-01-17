import { FiFacebook, FiTwitter } from "react-icons/fi";
import { MdDone, MdOutlineCopyright } from "react-icons/md";
import PlayStore from '../assets/Images/googlePlaystore.webp'
import AppStore from '../assets/Images/iosAppstore.webp'


const Footer = () => {
  return (
    <div className='md:px-[10%] px-[5%] py-10'>
        <div className="md:flex flex flex-wrap justify-between gap-">
            <div className="bg-red-00 mb-1 w-fit">
                <div className="font-semibold text-white text-[18x] md:mb-6 mb-1">Company</div>
                <div className=" text-gray-400 cursor-pointer mb-2 font-medium">About Us</div>
                <div className=" text-gray-400 cursor-pointer mb-2 font-medium">Careers</div>
            </div>
            <div className="bg-red-00 mb-1 w-fit">
                <div className="font-semibold text-white text-[18x] md:mb-6 mb-1">View Website in</div>
                  <div className=" text-gray-400 cursor-pointer mb-2 font-medium gap-2 flex"> <MdDone className="w-[25px] h-[25px]" />English</div>
            </div>
            <div className="bg-red-00 mb-1 w-fit">
                <div className="font-semibold text-white text-[18x] md:mb-6 mb-1">Need Help</div>
                <div className=" text-gray-400 cursor-pointer mb-2 font-medium">Visit Help Center</div>
                <div className=" text-gray-400 cursor-pointer mb-2 font-medium">Share Feedback</div>
            </div>
            <div className="bg-red-00 mb-1 w-fit">
                <div className="font-semibold text-white text-[18x] md:mb-6 mb-1">Connect with Us</div>
                  <span className="flex gap-6 text-white">
                    <FiFacebook className=" w-[25px] h-[25px]" /> <FiTwitter className=" w-[25px] h-[25px]" />
                  </span>
            </div>
        </div>
        <div className="md:flex block justify-between pt-5 items-center">
            <div>
                <div className=" text-gray-600 items-center gap-1 flex mb-1"><MdOutlineCopyright /> 2023 STAR. All Rights Reserved.</div>
                <div className="flex gap-4">
                    <div className=" text-gray-600">Terms Of Use</div>
                    <div className=" text-gray-600">Privacy Policy</div>
                    <div className=" text-gray-600">FAQ</div>
                </div>
            </div>
            <div className="flex gap-3 md:mt-0 mt-4">
                <img src={PlayStore} alt="PlayStore" className="w-[120px] h-[40px]" />
                <img src={AppStore} alt="AppStore" className="w-[120px] h-[40px]" />
            </div>
        </div>
    </div>
  )
}

export default Footer