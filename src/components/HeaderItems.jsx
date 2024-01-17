const HeaderItems = ({Name, Icon}) => {
  return (
    <div className="block md:flex gap-4 opacity-50 hover:opacity-100 cursor-pointer">
        <Icon className="md:w-[22px] w-[18px] md:h-[22px] h-[18px] " />
        <h2 className="md:block hidden hover:block">{Name}</h2>
    </div>
  )
}

export default HeaderItems