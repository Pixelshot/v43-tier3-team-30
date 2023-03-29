import React from 'react'
import CardItem from './CardItem'
import { AiOutlineHeart } from 'react-icons/ai'

interface CardProps {
  title: string
  imageSrc?: string
  description?: string
}

const CardList: React.FC<CardProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="grid grid-flow-cols gap-4">
      <CardItem title={title} imageSrc={imageSrc} description={description} />
    </div>
  )
}

export default CardList
