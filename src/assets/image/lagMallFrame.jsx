import lagMallFrame from '../../assets/image/lagmal_frame.svg'
const LagMallFrame = () => {
  return (
    <div className='w-full h-full'>
      <img src={lagMallFrame}
        alt="LagMall Frame"
        className='w-full h-full object-cover rounded-tl-xl md:rounded-bl-xl'
      />
    </div>
  )
}

export default LagMallFrame;