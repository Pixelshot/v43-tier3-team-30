import { useState } from 'react'
// import { BookmarkIcon, BookmarkFillIcon } from '@heroicons/react/solid'
import { BsBookmark } from 'react-icons/bs'
import { BsBookmarksFill } from 'react-icons/bs'

type BookmarkButtonProps = {
  isBookmarked: boolean
  setIsBookmarked: boolean
}

const BookmarkButton = ({
  isBookmarked,
  setIsBookmarked,
}: BookmarkButtonProps) => {
  const handleButtonClick = () => {
    setIsBookmarked(!isBookmarked)
  }

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className="inline-flex items-center p-2 my-auto border border-transparent text-xs font-medium rounded-md text-white bg-yellow-400 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {isBookmarked ? (
        <BsBookmarksFill className="mr-1.5 h-5 w-5 text-blue-900" />
      ) : (
        <BsBookmark className="mr-1.5 h-5 w-5 text-gray-700" />
      )}
      {isBookmarked ? (
        <span className="text-blue-900">Bookmarked</span>
      ) : (
        <span className="text-gray-700">Bookmark</span>
      )}
    </button>
  )
}

export default BookmarkButton
