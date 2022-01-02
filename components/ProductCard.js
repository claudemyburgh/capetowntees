import React from 'react'
import Image from 'next/image'
const ProductCard = ({ className, design }) => {
  return (
    <div className={`bg-white rounded-md shadow-2xl shadow-black ${className}`}>
      <div className="relative overflow-hidden rounded-md">
        <Image
          priority={true}
          src={design.image}
          blurDataURL={design.blur}
          placeholder="blur"
          layout={'responsive'}
          height={'800'}
          width={'1200'}
          alt={'flag'}
        />
      </div>
    </div>
  )
}

export default ProductCard
