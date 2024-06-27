import LatestOne from '../assets/Images/Latest/One.jpg'
import LatestTwo from '../assets/Images/Latest/Two.jpg'
import LatestThree from '../assets/Images/Latest/Three.jpg'
import LatestFour from '../assets/Images/Latest/Four.jpg'
import LatestFive from '../assets/Images/Latest/Five.jpg'
import LatestSix from '../assets/Images/Latest/Six.jpg'
import LatestSeven from '../assets/Images/Latest/Seven.jpg'
import LatestEight from '../assets/Images/Latest/Eight.jpg'
import LatestNine from '../assets/Images/Latest/Nine.jpg'
import LatestTen from '../assets/Images/Latest/Ten.jpg'
import LatestEleven from '../assets/Images/Latest/Eleven.jpg'
import LatestTwelve from '../assets/Images/Latest/Twelve.jpg'
import LatestThirteen from '../assets/Images/Latest/Thirteen.jpg'
import LatestFourteen from '../assets/Images/Latest/Fourteen.jpg'
import LatestFifthteen from '../assets/Images/Latest/Fifthteen.jpg'

import LatestItems from './LatestItems'


const Latest = () => {

    const late = [
        { image: LatestOne, },
        { image: LatestTwo, },
        { image: LatestThree, },
        { image: LatestFour, },
        { image: LatestFive, },
        { image: LatestSix, },
        { image: LatestSeven, },
        { image: LatestEight, },
        { image: LatestNine, },
        { image: LatestTen, },
        { image: LatestEleven, },
        { image: LatestTwelve, },
        { image: LatestThirteen, },
        { image: LatestFourteen, },
        { image: LatestFifthteen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Latest Releases</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {late.map((item) => (
                            <LatestItems
                                key={item.image}
                                Image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Latest
