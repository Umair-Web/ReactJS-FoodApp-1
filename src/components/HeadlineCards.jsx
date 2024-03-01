import React from 'react'
import { headline } from '../data/data'
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* CArd */}
      {headline.map((item,index)=>(
         <div key={index} className='relative rounded-xl'>
         {/* Overlay */}
         <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
             <p className='font-bold text-2xl px-2 pt-4'>{item.intro}</p>
             <p className='px-2'>{item.procedure}</p>
             <button className='border-white bg-white text-black mx-2 absolute bottom-4'>{item.order}</button>
         </div>
         <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={item.img} alt="" />
       </div>
      ))}
    </div>
  )
}

export default HeadlineCards
