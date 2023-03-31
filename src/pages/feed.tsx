import type { NextPage, NextApiRequest, NextApiResponse } from 'next'
import data from '../../data.json'
// import { signOut, useSession } from 'next-auth/react'
import CardList from '../components/Card/CardList'

const Feed: NextPage = () => {
  const notes = data
  console.log(notes)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3">
      <CardList
        title="My first exibition"
        imageSrc="https://images.unsplash.com/photo-1548618771-dfd3f73251b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
      />
      <CardList
        title="My second exibition"
        imageSrc="https://images.unsplash.com/photo-1513038630932-13873b1a7f29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages"
      />
      <CardList
        title="My third exibition"
        imageSrc="https://images.unsplash.com/photo-1548618771-dfd3f73251b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
      />
      <CardList
        title="My fourth exibition"
        imageSrc="https://images.unsplash.com/photo-1513038630932-13873b1a7f29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
      />
    </div>
  )
}

export default Feed
