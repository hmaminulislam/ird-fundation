import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex h-[100vh] items-center justify-center'>
      <h1 className='text-4xl'>Ird Fundation</h1>
    </main>
  )
}
