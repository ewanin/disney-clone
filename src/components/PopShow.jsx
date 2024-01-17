import PopShowOne from '../assets/Images/PopShow/One.png'
import PopShowTwo from '../assets/Images/PopShow/two.png'
import PopShowThree from '../assets/Images/PopShow/Three.png'
import PopShowFour from '../assets/Images/PopShow/Four.png'
import PopShowFive from '../assets/Images/PopShow/Five.png'
import PopShowSix from '../assets/Images/PopShow/Six.png'
import PopShowSeven from '../assets/Images/PopShow/Seven.png'
import PopShowEight from '../assets/Images/PopShow/Eight.png'
import PopShowNine from '../assets/Images/PopShow/Nine.png'
import PopShowTen from '../assets/Images/PopShow/Ten.png'
import PopShowEleven from '../assets/Images/PopShow/Eleven.png'
import PopShowTwelve from '../assets/Images/PopShow/Twelve.png'
import PopShowThirteen from '../assets/Images/PopShow/Thirteen.png'
import PopShowFourteen from '../assets/Images/PopShow/Fourteen.png'
import PopShowFifthteen from '../assets/Images/PopShow/Fifthteen.png'

import PopShowItems from './PopShowItems'


const PopShow = () => {

    const popShow = [
        { image: PopShowOne, },
        { image: PopShowTwo, },
        { image: PopShowThree, },
        { image: PopShowFour, },
        { image: PopShowFive, },
        { image: PopShowSix, },
        { image: PopShowSeven, },
        { image: PopShowEight, },
        { image: PopShowNine, },
        { image: PopShowTen, },
        { image: PopShowEleven, },
        { image: PopShowTwelve, },
        { image: PopShowThirteen, },
        { image: PopShowFourteen, },
        { image: PopShowFifthteen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Popular Show</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {popShow.map((item) => (
                            <PopShowItems
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

export default PopShow