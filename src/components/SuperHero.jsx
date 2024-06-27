import SuperHeroOne from '../assets/Images/SuperHero/One.png'
import SuperHeroTwo from '../assets/Images/SuperHero/Two.png'
import SuperHeroThree from '../assets/Images/SuperHero/Three.png'
import SuperHeroFour from '../assets/Images/SuperHero/Four.png'
import SuperHeroFive from '../assets/Images/SuperHero/Five.png'
import SuperHeroSix from '../assets/Images/SuperHero/Six.png'
import SuperHeroSeven from '../assets/Images/SuperHero/Seven.png'
import SuperHeroEight from '../assets/Images/SuperHero/Eight.png'
import SuperHeroNine from '../assets/Images/SuperHero/Nine.png'
import SuperHeroTen from '../assets/Images/SuperHero/Ten.png'
import SuperHeroEleven from '../assets/Images/SuperHero/Eleven.png'
import SuperHeroTwelve from '../assets/Images/SuperHero/Twelve.png'
import SuperHeroThirteen from '../assets/Images/SuperHero/Thirteen.png'
import SuperHeroFourteen from '../assets/Images/SuperHero/Fourteen.png'
import SuperHeroFifthteen from '../assets/Images/SuperHero/Fifthteen.png'

import SuperHeroItems from './SuperHeroItems'


const SuperHero = () => {

    const superHero = [
        { image: SuperHeroOne, },
        { image: SuperHeroTwo, },
        { image: SuperHeroThree, },
        { image: SuperHeroFour, },
        { image: SuperHeroFive, },
        { image: SuperHeroSix, },
        { image: SuperHeroSeven, },
        { image: SuperHeroEight, },
        { image: SuperHeroNine, },
        { image: SuperHeroTen, },
        { image: SuperHeroEleven, },
        { image: SuperHeroTwelve, },
        { image: SuperHeroThirteen, },
        { image: SuperHeroFourteen, },
        { image: SuperHeroFifthteen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Best of Superheros</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {superHero.map((item) => (
                            <SuperHeroItems
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

export default SuperHero
