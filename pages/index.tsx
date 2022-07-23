import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[1200px] min-h-screen relative">
      <img src={`/assets/images/LwaziNF.png`} className={`w-[200px] opacity-5`}/>
    </div>
  )
}

export default Home
