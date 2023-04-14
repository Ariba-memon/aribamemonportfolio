import Script from 'next/script'
import MyPhoto from '../public/myphoto.jpg'
import Image from 'next/image'
import Bg from '../public/background.jpg'
import Todo from '../public/Todo.jpg'
import AlMadina from '../public/AlMadina.jpg'
import piaic from '../public/piaic.jpg'
import Navbar from '@/components/Navbar'
import panaverse from '../public/panaverse.jpg'
import Home from '@/components/Home'
import useSWR from 'swr'
import Footer from '@/components/Footer'
export default function App() {
  return (
    <>
      <Navbar />
      {/* <script src="https://cdn.tailwindcss.com"></script> */}

      <Home />

      <Footer />
    </>
  )
}
