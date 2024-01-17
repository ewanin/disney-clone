const NewlyItems = ({ Image, }) => {
    return (
        <div className="">
            <img src={Image} alt="" className="w-[150px] md:w-[350px] rounded-lg hover:border-[3px] hover:border-gray-400 hover:scale-110 cursor-pointer" />
        </div>
    )
}

export default NewlyItems