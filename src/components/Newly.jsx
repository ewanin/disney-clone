import NewlyOne from '../assets/Images/Newly/One.jpg'
import NewlyTwo from '../assets/Images/Newly/two.jpg'
import NewlyThree from '../assets/Images/Newly/Three.jpg'
import NewlyFour from '../assets/Images/Newly/Four.jpg'
import NewlyFive from '../assets/Images/Newly/Five.jpg'
import NewlySix from '../assets/Images/Newly/Six.jpg'
import NewlySeven from '../assets/Images/Newly/Seven.jpg'
import NewlyEight from '../assets/Images/Newly/Eight.jpg'
import NewlyNine from '../assets/Images/Newly/Nine.jpg'
import NewlyTen from '../assets/Images/Newly/Ten.jpg'
import NewlyEleven from '../assets/Images/Newly/Eleven.jpg'
import NewlyTwelve from '../assets/Images/Newly/Twelve.jpg'
import NewlyThirteen from '../assets/Images/Newly/Thirteen.jpg'
import NewlyFourteen from '../assets/Images/Newly/Fourteen.jpg'
import NewlyFifthteen from '../assets/Images/Newly/Fifthteen.jpg'

import NewlyItems from './NewlyItems'


const Newly = () => {

    const newly = [
        { image: NewlyOne, },
        { image: NewlyTwo, },
        { image: NewlyThree, },
        { image: NewlyFour, },
        { image: NewlyFive, },
        { image: NewlySix, },
        { image: NewlySeven, },
        { image: NewlyEight, },
        { image: NewlyNine, },
        { image: NewlyTen, },
        { image: NewlyEleven, },
        { image: NewlyTwelve, },
        { image: NewlyThirteen, },
        { image: NewlyFourteen, },
        { image: NewlyFifthteen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'><span className='text-blue-400'>Free</span> Newly Added</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {newly.map((item) => (
                            <NewlyItems
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

export default Newly