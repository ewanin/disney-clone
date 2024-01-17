import Header1 from "../assets/Images/Header1.jpeg"
import POCO from "../assets/Images/POCO_Logo.jpg"
import { FaPlay } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Hanuman from '../assets/Videos/Hanuman.webm'
import HanumanLogo from '../assets/Images/HanumanLogo.webp'
import HanumanNew from '../assets/Images/HanumanNew.webp'

const Hero = () => {
  return (
    <div className="">

        <div className="md:flex block p-10 md:px-[10%] px-[5%]">
            <div className=" w-full bg-orange-400 h-full">
                <div className="lg:h-[320px] md:h-[270px] h-[200px] flex items-center justify-center">
                    <img src={Header1} alt="Header1" className="w-full h-full" />
                    <FaPlay className="text-white md:w-16 w-12 md:h-16 h-12 opacity-50 absolute" />
                </div>
            </div>
            <div className=" w-full bg-red-400 h-full ">
                <div className="  lg:h-[320px] md:h-[270px] h-[200px] bg-[#16181F] pl-[5%] xl:py-[5%] py-[10%] flex-col justify-between flex">
                    <div className="flex">
                        <img src={POCO} alt="POCO" className="w-[48px] lg:w-[60px]  h-[48px] lg:h-[60px]  rounded" />
                        <div className="ml-[5%] place-self-center">
                            <div className="flex  gap-1">
                                  <div className="bg-[#FFCC75] text-[#804800]  lg:text-[18px] font-bold px-1 rounded-sm">Ad</div>
                                  <div className="font-bold text-white w-[200px]  bg-rd-300 lg:text-[18px]">POCO X6 Series</div>
                            </div>
                            <div className="text-[#8F98B2] font-medium text-base">Sale on 16th Jan</div>
                        </div>
                    </div>
                    <div className="bg-[#252833] text-[#E1E6F0] w-max text-[18px]  px-[64px] py-[12px] font-bold rounded md:mt-[40%] lg:md:mt-[0%] ">Know More</div>
                </div>
            </div>
        </div>


        <div className="md:flex block items-center">
              <video src={Hanuman}
                  autoPlay="{true}" loop muted
                  className="h-full w-full">
              </video> 

            <div className="bg-range-600 xl:w-[28%] lg:w-[40%] md:w-[55%] p-4 md:absolute relative lg:ml-[15%] md:ml-[20%] ml-[5%]">
                <img src={HanumanLogo} alt="HanumanLogo" className="w-[225px] h-[125px] mb-3" />
                <img src={HanumanNew} alt="HanumanLogo" className="w-[100px] h-[25px] mb-3" />
                <div className="flex flex-wrap text-white gap-3 font-bold opacity-80 w-fit mb-3 items-center">
                    <span>2024</span>
                    <div className="items-center flex gap-2">
                        <span className=""><GoDotFill className="w-2 h-2" /></span>
                        <span>3 Seasons</span>
                    </div>
                    <div className="items-center flex gap-2">
                        <span className=""><GoDotFill className="w-2 h-2" /></span>
                        <span>7 Languages</span>
                    </div>
                    <div className="items-center flex gap-2">
                        <span className=""><GoDotFill  className="w-2 h-2"/></span>
                        <span className="bg-white bg-opacity-30 py-1 px-2 rounded">U/A 7+</span>
                    </div>
                </div>
                  <p className="text-white text-justify mb-3 opacity-80 w-fit">
                    Setting his mighty foot on Lanka, Hanuman unleashes himself against Ravan. Watch the legendary hero and the demon king go head to head in this ultimate war.
                </p>
                <div className="flex flex-wrap font-bold text-white gap-2 w-fit mb-3 opacity-80">
                    <span>Mythology</span>
                    <span>|</span>
                    <span>Animation</span>
                    <span>|</span>
                    <span>Creatures & Monsters</span>
                </div>
                <div className="flex w-fit gap-3">
                    <div className="flex text-white bg-white bg-opacity-30 py-3 px-10 rounded font-bold items-center gap-2 text-[18px]">
                        <span><FaPlay /></span>
                        <span>Watch Now</span>
                    </div>
                    <div className="text-white bg-white bg-opacity-30 px-4 rounded font-bold items-center gap-2 text-[30px]">
                        <span>+</span>
                    </div>
                </div>
            </div>

        </div>
   
    </div>

    
  )
}

export default Hero