import FriendsOne from '../assets/Images/Friends/One.png'
import FriendsTwo from '../assets/Images/Friends/Two.png'
import FriendsThree from '../assets/Images/Friends/Three.png'
import FriendsFour from '../assets/Images/Friends/Four.png'
import FriendsFive from '../assets/Images/Friends/Five.png'
import FriendsSix from '../assets/Images/Friends/Six.png'
import FriendsSeven from '../assets/Images/Friends/Seven.png'
import FriendsEight from '../assets/Images/Friends/Eight.png'
import FriendsNine from '../assets/Images/Friends/Nine.png'
import FriendsTen from '../assets/Images/Friends/Ten.png'
import FriendsEleven from '../assets/Images/Friends/Eleven.png'
import FriendsTwelve from '../assets/Images/Friends/Twelve.png'
import FriendsThirteen from '../assets/Images/Friends/Thirteen.png'
import FriendsFourteen from '../assets/Images/Friends/Fourteen.png'
import FriendsFifthteen from '../assets/Images/Friends/Fifthteen.png'

import FriendsItems from './FriendsItems'


const Friends = () => {

    const friends = [
        { image: FriendsOne, },
        { image: FriendsTwo, },
        { image: FriendsThree, },
        { image: FriendsFour, },
        { image: FriendsFive, },
        { image: FriendsSix, },
        { image: FriendsSeven, },
        { image: FriendsEight, },
        { image: FriendsNine, },
        { image: FriendsTen, },
        { image: FriendsEleven, },
        { image: FriendsTwelve, },
        { image: FriendsThirteen, },
        { image: FriendsFourteen, },
        { image: FriendsFifthteen, },
    ]


    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Watch with Friends</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {friends.map((item) => (
                            <FriendsItems
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

export default Friends
