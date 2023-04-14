'use client'
import Image from 'next/image'
import Bg from '../public/background.jpg'
import Todo from '../Images/Todo.jpg'
import AlMadina from '../Images/AlMadina.jpg'
import piaicweb from '../Images/piaicweb.jpg'

import panaverse from '../Images/panaverse.jpg'

export default function Workflow() {
  return (
    <>
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-serif text-gray-600 hover:text-purple-600">
              Work
            </h1>
            <p className="pt-2 font-sans">The best of my works</p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-white rounded-md shadow-md lg:col-span-2">
              <Image
                src={panaverse}
                alt=""
                className="object-cover w-full h-80"
              />
              <div className="p-8">
                <h3 className="font-bold text-2xl">Panaverse Dao Website</h3>
                <p className="pt-3">I am create a Panaverse Dao Website</p>
                <a
                  href="https://dailyapp-78d3c.web.app/"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-md shadow-md text-sm font-bold text-white"
                  target="_blank"
                >
                  See The Website
                </a>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <Image
                src={AlMadina}
                alt=""
                className="object-cover w-full h-80"
              />
              <div className="p-8">
                <h3 className="font-bold text-2xl">Jewellery Website</h3>
                <p className="pt-3">Jewellery Website for someone Business</p>
                <a
                  href="https://almadinajewellers-e6a51.web.app/"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-md shadow-md text-sm font-bold text-white"
                  target="_blank"
                >
                  See The Website
                </a>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md">
              <Image src={Todo} alt="" className="object-cover w-full h-80" />
              <div className="p-8">
                <h3 className="font-bold text-2xl">Todo App using Firebase</h3>
                <p className="pt-3">I make a Todo App using Firebase</p>
                <a
                  href="https://panaverseweb.vercel.app/"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-md shadow-md text-sm font-bold text-white"
                  target="_blank"
                >
                  See The Website
                </a>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md lg:col-span-2">
              <Image
                src={piaicweb}
                alt=""
                className="object-cover w-full h-80"
              />
              <div className="p-8">
                <h3 className="font-bold text-2xl">Piaic Website</h3>
                <p className="pt-3">I make a piaic Website</p>
                <a
                  href="https://piaicwebsite.vercel.app/"
                  className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-md shadow-md text-sm font-bold text-white"
                  target="_blank"
                >
                  See The Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
