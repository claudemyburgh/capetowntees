import React, { Fragment } from 'react'
import ShirtCard from '../components/ShirtCard'

import designs from '../designs'

const Home = () => {
  return (
    <div className={'w-full min-h-screen py-48 bg-gray-900'}>
      <div className="container px-5 mx-auto space-y-48">
        <h1 className={'text-8xl text-primary font-black tracking-tight'}>Company Name</h1>
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
