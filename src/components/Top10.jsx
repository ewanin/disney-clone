import Top10One from '../assets/Images/Top10/One.png'
import Top10Two from '../assets/Images/Top10/Two.png'
import Top10Three from '../assets/Images/Top10/Three.png'
import Top10Four from '../assets/Images/Top10/Four.png'
import Top10Five from '../assets/Images/Top10/Five.png'
import Top10Six from '../assets/Images/Top10/Six.png'
import Top10Seven from '../assets/Images/Top10/Seven.png'
import Top10Eight from '../assets/Images/Top10/Eight.png'
import Top10Nine from '../assets/Images/Top10/Nine.png'
import Top10Ten from '../assets/Images/Top10/Ten.png'

import Top10Items from './Top10Items'


const Top10 = () => {

    const top10 = [
        { image: Top10One, },
        { image: Top10Two, },
        { image: Top10Three, },
        { image: Top10Four, },
        { image: Top10Five, },
        { image: Top10Six, },
        { image: Top10Seven, },
        { image: Top10Eight, },
        { image: Top10Nine, },
        { image: Top10Ten, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Top 10 in India Today - Hindi</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-6'>
                    <div className='bg-ellow-500 w-max flex gap-5 '>
                        {top10.map((item) => (
                            <Top10Items
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

export default Top10
