import React from 'react'
import { useState } from 'react'
import Bookmark from '../Bookmark'
import { BsBookmark } from 'react-icons/bs'
import { BsBookmarksFill } from 'react-icons/bs'

interface CardProps {
  title: string
  imageSrc?: string
  description?: string
  isSaved?: boolean
}

const CardItem: React.FC<CardProps> = ({
  title,
  imageSrc,
  description,
  isSaved,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(isSaved)
  return (
    <div className="m-12 grid sm:grid-cols-2 md:grid-cols-1 h-max rounded-lg bg-[url('/noise.png')] bg-gray-800 shadow-xl hover:shadow-2xl">
      <div className="p-4 m-auto">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-t-lg mx-auto h-48 min-w-sm w-[100vh] object-cover md:rounded-none md:rounded-l-lg hover:shadow-xl lg:my-auto"
        />
      </div>
      <div className="p-4 leading-normal flex flex-col overflow-auto">
        <div className="flex flex-row justify-between">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-white">
            {title}
          </h2>
          {/* <BsBookmark color="white" size={20} /> */}
          <Bookmark
            isBookmarked={isBookmarked}
            setIsBookmarked={setIsBookmarked}
          />
        </div>
        <p className="mb-3 font-normal text-gray-100 line-clamp-5">
          {description}
        </p>
        {description.length > 240 && (
          <p className="text-sky-400">Read more...</p>
        )}
      </div>
    </div>
  )
}

export default CardItem
