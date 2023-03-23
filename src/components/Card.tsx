import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

interface CardProps {
  title: string
  imageSrc?: string
  description?: string
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="mx-auto flex flex-col justify-around border rounded-lg shadow md:flex-row md:max-w-xl bg-[#16181a] hover:shadow-xl">
      <div className="p-4 border-2 border-red-400">
        {/* <div className="p-4 border-solid border-2 border-sky-500"> */}
        <img
          src={imageSrc}
          alt={title}
          className="rounded-t-lg mx-auto h-auto w-auto md:w-48 lg:w-96 md:rounded-none md:rounded-l-lg hover:shadow-xl"
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <div className="flex flex-row items-center justify-between">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <AiOutlineHeart color="white" size={20} />
        </div>
        {description && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default Card
