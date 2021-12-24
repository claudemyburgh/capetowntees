import React, { Fragment } from 'react'
import Image from 'next/image'
import ShirtCard from '../components/ShirtCard'

import designs from '../designs'

const Home = () => {
  return (
    <div className={'w-full min-h-screen py-20 bg-gray-900'}>
      <div className="container px-5 mx-auto space-y-48">
        <section className="flex flex-wrap items-center w-full">
          <div className="w-1/4 relative drop-shadow-[0_15px_35px_rgba(251,176,64,0.25)]">
            <Image src={'/img/tees-logo.png'} alt={'Cape Town Tees Logo'} height={1200} width={1251} layout={'responsive'} />
          </div>
          <div className="w-3/4 p-10 text-gray-100 space-y-5">
            <header>
              <h1
                className={
                  'text-transparent bg-gradient-to-b from-primary-200 to-primary-800 bg-clip-text font-black text-7xl' +
                  ' tracking-tightdrop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]'
                }
              >
                Cape Town Tees
              </h1>
              <h3
                className={
                  'border-l-4 pl-3 mt-2 border-secondary-500 text-2xl font-bold italic tracking-tight' +
                  ' text-primary-800 text-secondary-500'
                }
              >
                Shirts for all
              </h3>
            </header>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi debitis enim ex expedita impedit libero
              necessitatibus nisi quibusdam, quidem sint sunt voluptatum? Deleniti est repellendus velit! Ea illo, tempore!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi debitis enim ex expedita impedit libero
              necessitatibus nisi quibusdam, quidem sint sunt voluptatum? Deleniti est repellendus velit! Ea illo, tempore!
            </p>
          </div>
        </section>

        {designs.map((design) => (
          <Fragment key={design.id}>
            <ShirtCard design={design} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Home
