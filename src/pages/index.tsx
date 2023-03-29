import type { NextPage } from 'next'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import CardList from '../components/Card/CardList'

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
      <Link href="/feed">Feed Page</Link>
    </>
  )
}

export default Home
