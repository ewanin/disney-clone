import Disney from '../assets/Images/disney.png'
import Pixar from '../assets/Images/pixar.png'
import Marvel from '../assets/Images/marvel.png'
import StarWars from '../assets/Images/starwar.png'
import National from '../assets/Images/nationalG.png'

import DisneyVid from '../assets/Videos/disney.mp4'
import PixarVid from '../assets/Videos/pixar.mp4'
import MarvelVid from '../assets/Videos/marvel.mp4'
import StarWarsVid from '../assets/Videos/star-wars.mp4'
import NationalVid from '../assets/Videos/national-geographic.mp4'

const ProductionHouse = () => {

    const prod = [
        { id: 1, image: Disney, video: DisneyVid },
        { id: 2, image: Pixar, video: PixarVid },
        { id: 3, image: Marvel, video: MarvelVid },
        { id: 4, image: StarWars, video: StarWarsVid },
        { id: 5, image: National, video: NationalVid },
    ]
  return (
    <div>
      <div className='md:flex flex flex-wrap gap-3 p-6 md:px-16 items-center md:justify-center justify-center mx-[7%]'>
        {prod.map((item) => (
          <div className='lg:w-[210px] md:w-[150px] w-[100px] border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative' key={item.image}>
            <img src={item.image} alt="Image" className='w-full z-[1] opacity-50' />
            <video src={item.video} autoPlay loop playsInline muted className='absolute z-0 top-0 rounded-md opacity-0 hover:opacity-50' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductionHouse