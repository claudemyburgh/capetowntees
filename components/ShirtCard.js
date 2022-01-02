import React from 'react'
import ProductCard from './ProductCard'
import CustomSelect from './CustomSelect'

const ShirtCard = ({ design }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-y-2md: md:gap-10">
        <div className={'col-span-12 md:col-span-7'}>
          <ProductCard design={design} />
        </div>
        <div className={'flex items-center col-span-12 md:col-span-5 relative text-dark-100'}>
          <div className="relative translate-y-2 md:translate-y-8">
            <div className={'bg-white relative z-20 rounded p-10 w-full shadow-lg shadow-black space-y-5'}>
              <h2 className={'text-4xl font-black tracking-tight'}>{design.title}</h2>

              <div>
                {design.tags.map((tag, index) => (
                  <span key={index.toString()} className={'bg-gray-200 m-1 inline-block text-gray-400 rounded-lg' + ' px-2 py-1 text-xs'}>
                    #{tag}
                  </span>
                ))}
              </div>
              <article className={'line-clamp-32'} dangerouslySetInnerHTML={{ __html: design.description }} />
              <div className="flex items-center md:space-x-1">
                <button
                  disabled
                  type={'button'}
                  className={'bg-primary-500 text-white px-5 py-2 rounded' + ' disabled:bg-gray-300 cursor-not-allowed'}
                >
                  VIEW ON AMAZON
                </button>
                <i className="italic text-pink-300 px-3">coming soon</i>
                {/*<CustomSelect />*/}
                {/*<button*/}
                {/*  className={*/}
                {/*    'px-5 h-10 rounded bg-primary-500 text-white focus:outline-none focus-visible:ring-2' +*/}
                {/*    ' focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary-300 focus-visible:ring-offset-2 focus-visible:border-primary-500 sm:text-sm'*/}
                {/*  }*/}
                {/*>*/}
                {/*  VIEW*/}
                {/*</button>*/}
              </div>
            </div>
            <div className={'bg-gray-200 absolute inset-0 z-10 rounded  shadow-lg shadow-black scale-95 md:-translate-y-8'} />
            <div className={'bg-gray-300 absolute inset-0 z-0 rounded  shadow-lg shadow-black scale-90' + ' md:-translate-y-16'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShirtCard
