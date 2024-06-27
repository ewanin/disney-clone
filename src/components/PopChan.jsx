import PopChanOne from '../assets/Images/PopChan/One.webp'
import PopChanTwo from '../assets/Images/PopChan/Two.webp'
import PopChanThree from '../assets/Images/PopChan/Three.webp'
import PopChanFour from '../assets/Images/PopChan/Four.webp'
import PopChanFive from '../assets/Images/PopChan/Five.webp'
import PopChanSix from '../assets/Images/PopChan/Six.webp'
import PopChanSeven from '../assets/Images/PopChan/Seven.webp'
import PopChanEight from '../assets/Images/PopChan/Eight.webp'
import PopChanNine from '../assets/Images/PopChan/Nine.webp'
import PopChanTen from '../assets/Images/PopChan/Ten.webp'

import PopChanItems from './PopChanItems'


const PopChan = () => {

    const popChan = [
        { image: PopChanOne, },
        { image: PopChanTwo, },
        { image: PopChanThree, },
        { image: PopChanFour, },
        { image: PopChanFive, },
        { image: PopChanSix, },
        { image: PopChanSeven, },
        { image: PopChanEight, },
        { image: PopChanNine, },
        { image: PopChanTen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Popular Channels</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {popChan.map((item) => (
                            <PopChanItems
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

export default PopChan
