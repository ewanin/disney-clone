import ComedyOne from '../assets/Images/Comedy/One.jpg'
import ComedyTwo from '../assets/Images/Comedy/Two.png'
import ComedyThree from '../assets/Images/Comedy/Three.jpg'
import ComedyFour from '../assets/Images/Comedy/Four.jpg'
import ComedyFive from '../assets/Images/Comedy/Five.jpg'
import ComedySix from '../assets/Images/Comedy/Six.png'
import ComedySeven from '../assets/Images/Comedy/Seven.jpg'
import ComedyEight from '../assets/Images/Comedy/Eight.jpg'
import ComedyNine from '../assets/Images/Comedy/Nine.png'
import ComedyTen from '../assets/Images/Comedy/Ten.png'
import ComedyEleven from '../assets/Images/Comedy/Eleven.png'
import ComedyTwelve from '../assets/Images/Comedy/Twelve.png'
import ComedyThirteen from '../assets/Images/Comedy/Thirteen.png'
import ComedyFourteen from '../assets/Images/Comedy/Fourteen.png'
import ComedyFifthteen from '../assets/Images/Comedy/Fifthteen.png'

import ComedyItems from './ComedyItems'


const Comedy = () => {

    const comedy = [
        { image: ComedyOne, },
        { image: ComedyTwo, },
        { image: ComedyThree, },
        { image: ComedyFour, },
        { image: ComedyFive, },
        { image: ComedySix, },
        { image: ComedySeven, },
        { image: ComedyEight, },
        { image: ComedyNine, },
        { image: ComedyTen, },
        { image: ComedyEleven, },
        { image: ComedyTwelve, },
        { image: ComedyThirteen, },
        { image: ComedyFourteen, },
        { image: ComedyFifthteen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Comedy Movies</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {comedy.map((item) => (
                            <ComedyItems
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

export default Comedy
