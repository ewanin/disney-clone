import PopLangOne from '../assets/Images/PopLang/One.webp'
import PopLangTwo from '../assets/Images/PopLang/Two.webp'
import PopLangThree from '../assets/Images/PopLang/Three.webp'
import PopLangFour from '../assets/Images/PopLang/Four.webp'
import PopLangFive from '../assets/Images/PopLang/Five.webp'
import PopLangSix from '../assets/Images/PopLang/Six.webp'
import PopLangSeven from '../assets/Images/PopLang/Seven.webp'
import PopLangEight from '../assets/Images/PopLang/Eight.webp'
import PopLangNine from '../assets/Images/PopLang/Nine.webp'
import PopLangTen from '../assets/Images/PopLang/Ten.webp'

import PopLangItems from './PopLangItems'


const PopLang = () => {

    const popLang = [
        { image: PopLangOne, },
        { image: PopLangTwo, },
        { image: PopLangThree, },
        { image: PopLangFour, },
        { image: PopLangFive, },
        { image: PopLangSix, },
        { image: PopLangSeven, },
        { image: PopLangEight, },
        { image: PopLangNine, },
        { image: PopLangTen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Popular Lanuages</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {popLang.map((item) => (
                            <PopLangItems
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

export default PopLang
