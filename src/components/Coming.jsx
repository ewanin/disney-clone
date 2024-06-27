import ComingOne from '../assets/Images/Coming/One.png'
import ComingTwo from '../assets/Images/Coming/Two.png'
import ComingThree from '../assets/Images/Coming/Three.png'
import ComingFour from '../assets/Images/Coming/Four.png'
import ComingFive from '../assets/Images/Coming/Five.png'
import ComingSix from '../assets/Images/Coming/Six.png'
import ComingSeven from '../assets/Images/Coming/Seven.png'
import ComingEight from '../assets/Images/Coming/Eight.png'
import ComingNine from '../assets/Images/Coming/Nine.png'
import ComingTen from '../assets/Images/Coming/Ten.png'
import ComingEleven from '../assets/Images/Coming/Eleven.png'
import ComingTwelve from '../assets/Images/Coming/Twelve.png'
import ComingThirteen from '../assets/Images/Coming/Thirteen.png'
import ComingFourteen from '../assets/Images/Coming/Fourteen.png'
import ComingFifthteen from '../assets/Images/Coming/Fifthteen.png'

import ComingItems from './ComingItems'


const Coming = () => {

    const coming = [
        { image: ComingOne, },
        { image: ComingTwo, },
        { image: ComingThree, },
        { image: ComingFour, },
        { image: ComingFive, },
        { image: ComingSix, },
        { image: ComingSeven, },
        { image: ComingEight, },
        { image: ComingNine, },
        { image: ComingTen, },
        { image: ComingEleven, },
        { image: ComingTwelve, },
        { image: ComingThirteen, },
        { image: ComingFourteen, },
        { image: ComingFifthteen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Coming Soon</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {coming.map((item) => (
                            <ComingItems
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

export default Coming
