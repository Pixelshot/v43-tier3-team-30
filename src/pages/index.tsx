import type { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import Card from '../components/Card'
const Home: NextPage = () => {
  const { data: session, status } = useSession()

  console.log(status === 'authenticated' && session.user)

  if (status === 'authenticated') {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <a href="/auth/signin">Sign in</a>
      <Card
        title="My first exibition"
        imageSrc="https://images.unsplash.com/photo-1548618771-dfd3f73251b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
        description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
      />
    </>
  )
}

export default Home
