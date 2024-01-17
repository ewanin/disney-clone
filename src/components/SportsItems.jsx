import { FaPlay } from "react-icons/fa6";

const SportsItems = ({ Image, Name, Time}) => {
    return (
        <div className="">
            <div>
                <img src={Image} alt="" className="w-[200px] md:w-[300px] rounded-lg hover:border-[3px] hover:border-gray-400 hover:scale-110 cursor-pointer " />
                <div className="text-white flex text-[18px] items-center justify-between p-2 -mt-[14%] font-medium relative">
                    <span><FaPlay /></span>
                    <span>{Time}</span>
                </div>
            </div>
            <div className="text-white text-[18px] mt-2">{Name}</div>
        </div>
    )
}

export default SportsItems