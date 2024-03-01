import React, { useEffect, useState } from 'react'
import { data } from '../data/data'
const Food = React.memo(() => {

  const [foods, setFoods] = useState(data);
  const dollar = ["$", "$$", "$$$", "$$$$"]
  const Foods = ["Burgers", "Pizzas", "Salads", "Chickens"];

  const filterType = (category) => {
    setFoods(data.filter((item) => {
      return item.category === category
    }))
  }
  const filterPrice = (price) => {
    setFoods(data.filter((item) => {
      return item.price === price
    }))
  }
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* Filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>


        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Types</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >All</button>
            {Foods.map((item, index) => (
              <button key={index} onClick={() => filterType(item)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >{item}</button>
            ))}
          </div>

        </div>


        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            {dollar.map((item, index) => (
              <button onClick={() => filterPrice(item)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>{item}</button>
            ))}
          </div>
        </div>
      </div>

      
      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-xl'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-xl ' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p >
                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
})

export default Food
