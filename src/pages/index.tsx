import React from 'react'
import Head from 'next/head'
import { Main } from 'next/document'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Hello NextJS</h1>
    </>
  )
}

export default Home
