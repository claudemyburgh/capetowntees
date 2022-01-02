import React, { Fragment, useState } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import ShirtCard from '../components/ShirtCard'

import designs from '../designs'

const Home = () => {
  const [query, setQuery] = useState('')

  return (
    <div className={'w-full mb-48  py-20 relative'}>
      <div className="container px-5 mx-auto space-y-12 md:space-y-48">
        <motion.section
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ ease: 'backOut', duration: 0.5 }}
          className="flex flex-wrap items-center w-full"
        >
          <div className="w-3/4  md:w-1/4 relative drop-shadow-[0_15px_35px_rgba(251,176,64,0.25)]">
            <Image
              priority={true}
              src={'/img/tees-logo.png'}
              alt={'Cape Town Tees Logo'}
              height={1200}
              width={1251}
              layout={'responsive'}
            />
          </div>
          <div className="w-full md:w-2/4 p-10 text-gray-100 space-y-5">
            <header>
              <h1
                className={
                  'text-transparent bg-gradient-to-b from-primary-200 to-primary-800 bg-clip-text font-black' +
                  ' text-4xl md:text-7xl' +
                  ' tracking-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]'
                }
              >
                Cape Town Tees
              </h1>
              <h3
                className={
                  'border-l-4 pl-3 mt-2 border-secondary-500 text-xl md:text-2xl font-bold italic tracking-tight' +
                  ' text-primary-800 text-secondary-500'
                }
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                South Africa's Pride
              </h3>
            </header>
            <p className={'text-lg'}>
              Here at Cape Town Tees, we offer a unique variety of t-shirt designs that shows people how much we love our beautiful city and
              its surroundings. With a wide variety of styles, we know that there will be something for you.
            </p>
            <p className={'text-lg'}>And Yes, we also have some novelty and funny t-shirts.</p>
          </div>
        </motion.section>

        {designs
          .filter((value) => {
            if (value === '') {
              return value
            } else if (value.title.toLowerCase().includes(query.toLowerCase())) {
              return value
            }
          })
          .map((design) => (
            <Fragment key={design.id}>
              <ShirtCard design={design} />
            </Fragment>
          ))}
      </div>
    </div>
  )
}

export default Home
