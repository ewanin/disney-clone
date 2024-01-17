import PopGenOne from '../assets/Images/PopGen/One.webp'
import PopGenTwo from '../assets/Images/PopGen/two.webp'
import PopGenThree from '../assets/Images/PopGen/Three.webp'
import PopGenFour from '../assets/Images/PopGen/Four.webp'
import PopGenFive from '../assets/Images/PopGen/Five.webp'
import PopGenSix from '../assets/Images/PopGen/Six.webp'
import PopGenSeven from '../assets/Images/PopGen/Seven.webp'
import PopGenEight from '../assets/Images/PopGen/Eight.webp'
import PopGenNine from '../assets/Images/PopGen/Nine.webp'
import PopGenTen from '../assets/Images/PopGen/Ten.webp'

import PopGenItems from './PopGenItems'


const PopGen = () => {

    const popGen = [
        { image: PopGenOne, },
        { image: PopGenTwo, },
        { image: PopGenThree, },
        { image: PopGenFour, },
        { image: PopGenFive, },
        { image: PopGenSix, },
        { image: PopGenSeven, },
        { image: PopGenEight, },
        { image: PopGenNine, },
        { image: PopGenTen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Popular Genres</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {popGen.map((item) => (
                            <PopGenItems
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

export default PopGen