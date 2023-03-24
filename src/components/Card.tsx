import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

interface CardProps {
  title: string
  imageSrc?: string
  description?: string
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="m-12 rounded-lg bg-[url('/noise.png')] bg-gray-800 shadow-xl grid sm:grid-cols-2">
      <div className="p-4">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-t-lg mx-auto h-48 min-w-sm w-[100vh] object-cover md:rounded-none md:rounded-l-lg hover:shadow-xl"
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="flex flex-row justify-between">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <AiOutlineHeart color="white" size={20} />
        </div>
        {description && (
          <p className="mb-3 font-normal text-gray-100">{description}</p>
        )}
      </div>
    </div>
  )
}

export default Card
