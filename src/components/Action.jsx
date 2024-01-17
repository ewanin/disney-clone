import ActionOne from '../assets/Images/Action/One.png'
import ActionTwo from '../assets/Images/Action/two.png'
import ActionThree from '../assets/Images/Action/Three.png'
import ActionFour from '../assets/Images/Action/Four.png'
import ActionFive from '../assets/Images/Action/Five.png'
import ActionSix from '../assets/Images/Action/Six.png'
import ActionSeven from '../assets/Images/Action/Seven.png'
import ActionEight from '../assets/Images/Action/Eight.png'
import ActionNine from '../assets/Images/Action/Nine.png'
import ActionTen from '../assets/Images/Action/Ten.png'
import ActionEleven from '../assets/Images/Action/Eleven.png'
import ActionTwelve from '../assets/Images/Action/Twelve.png'
import ActionThirteen from '../assets/Images/Action/Thirteen.png'
import ActionFourteen from '../assets/Images/Action/Fourteen.png'
import ActionFifthteen from '../assets/Images/Action/Fifthteen.png'

import ActionItems from './ActionItems'


const Action = () => {

    const action = [
        { image: ActionOne, },
        { image: ActionTwo, },
        { image: ActionThree, },
        { image: ActionFour, },
        { image: ActionFive, },
        { image: ActionSix, },
        { image: ActionSeven, },
        { image: ActionEight, },
        { image: ActionNine, },
        { image: ActionTen, },
        { image: ActionEleven, },
        { image: ActionTwelve, },
        { image: ActionThirteen, },
        { image: ActionFourteen, },
        { image: ActionFifthteen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Action Movies</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {action.map((item) => (
                            <ActionItems
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

export default Action