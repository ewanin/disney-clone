import SportsOne from '../assets/Images/Sports/One.webp'
import SportsTwo from '../assets/Images/Sports/Two.webp'
import SportsThree from '../assets/Images/Sports/Three.webp'
import SportsFour from '../assets/Images/Sports/Four.webp'
import SportsFive from '../assets/Images/Sports/Five.webp'
import SportsSix from '../assets/Images/Sports/Six.webp'
import SportsSeven from '../assets/Images/Sports/Seven.webp'
import SportsEight from '../assets/Images/Sports/Eight.webp'
import SportsNine from '../assets/Images/Sports/Nine.webp'
import SportsTen from '../assets/Images/Sports/Ten.webp'
import SportsEleven from '../assets/Images/Sports/Eleven.webp'
import SportsTwelve from '../assets/Images/Sports/Twelve.webp'
import SportsThirteen from '../assets/Images/Sports/Thirteen.webp'
import SportsFourteen from '../assets/Images/Sports/Fourteen.webp'
import SportsFifthteen from '../assets/Images/Sports/Fifthteen.webp'

import SportsItems from './SportsItems'

const Sports = () => {

    const sport = [
        { image: SportsOne, name: 'Perth Scorchers vs Sydney Sixers', time: '21m' },
        { image: SportsTwo, name: '3rd T20I: All You Need to Know', time: '10m' },
        { image: SportsThree, name: '28 off 6! Evans Tonks Kerr', time: '15m' },
        { image: SportsFour, name: 'Panthers 31-29 Mumba', time: '11m' },
        { image: SportsFive, name: 'Warriors 35-29 Bulls', time: '13m' },
        { image: SportsSix, name: 'Dube Fireworks Blow Away Afg', time: '9m' },
        { image: SportsSeven, name: 'Man City Linchpin! De Bruyne Best', time: '20m' },
        { image: SportsEight, name: 'Hurricanes Sink Stars to Finish 5th', time: '12m' },
        { image: SportsNine, name: 'Arjun Bags 6th Straight Super 10', time: '8m' },
        { image: SportsTen, name: 'High 5! Shinde Show Bullies Bulls', time: '7m' },
        { image: SportsEleven, name: 'Super 10! Bharat Heroics in Vain', time: '10m' },
        { image: SportsTwelve, name: 'Manchester United 2-2 Tottenham', time: '24m' },
        { image: SportsThirteen, name: 'Dabang 39-39 Pirates', time: '18m' },
        { image: SportsFourteen, name: 'Steelers 36-31 Thalaivas', time: '16m' },
        { image: SportsFifthteen, name: 'Hits & Flops: Man United vs Tottenham', time: '26m' },
    ]

    return (
        <div>
            <div className='pl-[10%] pt-10'>
                <span className='text-white font-bold text-[26px]'>Best in Sports</span>
                <div className=' overflow- overflow-x-scroll no-scrollbar py-4'>
                    <div className='bg-ellow-500 w-max flex gap-4 '>
                        {sport.map((item) => (
                            <SportsItems
                                key={item.image}
                                Image={item.image}
                                Name={item.name}
                                Time={item.time}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sports
