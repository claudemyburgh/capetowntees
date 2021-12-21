import React from 'react'
import ProductCard from './ProductCard'
import CustomSelect from './CustomSelect'

const ShirtCard = ({ design }) => {
  return (
    <div className="grid grid-cols-12 gap-10">
      <ProductCard image={design.image} className={'col-span-12 md:col-span-7'} />
      <div className={'flex items-center col-span-12 md:col-span-5 relative'}>
        <div className="relative translate-y-8">
          <div className={'bg-white relative z-20 rounded p-10 w-full shadow-lg shadow-black space-y-5'}>
            <h2 className={'text-4xl font-black'}>{design.title}</h2>

            <div className={'space-x-2'}>
              {design.tags.map((tag, index) => (
                <span key={index.toString()} className={'bg-gray-200 text-gray-500 rounded-lg px-2 py-1 text-sm'}>
                  #{tag}
                </span>
              ))}
            </div>
            <p>{design.description}</p>
            <div className="flex items-center space-x-1">
              <CustomSelect />
              <button
                className={
                  'px-5 h-10 rounded bg-primary-500 text-white focus:outline-none focus-visible:ring-2' +
                  ' focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary-300 focus-visible:ring-offset-2 focus-visible:border-primary-500 sm:text-sm'
                }
              >
                VIEW
              </button>
            </div>
          </div>
          <div className={'bg-gray-200 absolute inset-0 z-10 rounded  shadow-lg shadow-black scale-95 -translate-y-8'} />
          <div className={'bg-gray-300 absolute inset-0 z-0 rounded  shadow-lg shadow-black scale-90 -translate-y-16'} />
        </div>
      </div>
    </div>
  )
}

export default ShirtCard
