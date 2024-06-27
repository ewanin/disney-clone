import PopTeenOne from '../assets/Images/PopTeen/One.png'
import PopTeenTwo from '../assets/Images/PopTeen/Two.png'
import PopTeenThree from '../assets/Images/PopTeen/Three.jpg'
import PopTeenFour from '../assets/Images/PopTeen/Four.png'
import PopTeenFive from '../assets/Images/PopTeen/Five.jpg'
import PopTeenSix from '../assets/Images/PopTeen/Six.jpg'
import PopTeenSeven from '../assets/Images/PopTeen/Seven.jpg'
import PopTeenEight from '../assets/Images/PopTeen/Eight.jpg'
import PopTeenNine from '../assets/Images/PopTeen/Nine.jpg'
import PopTeenTen from '../assets/Images/PopTeen/Ten.png'
import PopTeenEleven from '../assets/Images/PopTeen/Eleven.png'
import PopTeenTwelve from '../assets/Images/PopTeen/Twelve.png'
import PopTeenThirteen from '../assets/Images/PopTeen/Thirteen.png'
import PopTeenFourteen from '../assets/Images/PopTeen/Fourteen.png'
import PopTeenFifthteen from '../assets/Images/PopTeen/Fifthteen.png'

import PopTeenItems from './PopTeenItems'


const PopTeen = () => {

    const popTeen = [
        { image: PopTeenOne, },
        { image: PopTeenTwo, },
        { image: PopTeenThree, },
        { image: PopTeenFour, },
        { image: PopTeenFive, },
        { image: PopTeenSix, },
        { image: PopTeenSeven, },
        { image: PopTeenEight, },
        { image: PopTeenNine, },
        { image: PopTeenTen, },
        { image: PopTeenEleven, },
        { image: PopTeenTwelve, },
        { image: PopTeenThirteen, },
        { image: PopTeenFourteen, },
        { image: PopTeenFifthteen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Popular in Teen</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 ' >
                        {popTeen.map((item) => (
                            <PopTeenItems
                                Image={item.image}
                                key={item.image}

                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopTeen
