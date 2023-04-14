'use client'
import Script from 'next/script'
import MyPhoto from '../Images/myphoto.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>

      <link
        rel="shortcut icon"
        href="https://ca01001129.schoolwires.net/cms/lib/CA01001129/Centricity/Domain/441/Resumes-logo%20Image.png"
        type="image/x-icon"
      />

      <div className="absolute w-full min-h-screen">
        <div
          className="absolute z-0 top-0 w-full h-1/2 bg-cover bg-bottom pt-20 px-12 text-white text-center"
          // style="background-image: url('images/background.jpg')"
        ></div>
        <div></div>
      </div>
      <div className="relative z-10 flex min-h-screen h-auto justify-center items-center">
        <div className="relative max-w-4xl">
          <div className="absolute z-10 inset-0 bg-gradient-to-r from-purple-400 to-pink-400  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg "></div>
          <div className="relative z-20 bg-white md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl">
            <div className="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10">
              <div>
                <h2 className="text-lg">Hello, I am</h2>
                <h1 className="pt-1 text-5xl font-bold text-gray-800 hover:text-purple-600">
                  Ariba Memon
                </h1>
              </div>
              <p className="text-xl leading-relaxed bg-gradient-to-r from-purple-200 to-pink-200">
                Full-stack web developer who crafts beautiful websites that help
                your business grow online
              </p>
              <div className="inline-flex text-xl text-gray-600 space-x-5"></div>
            </div>
            <Image
              src={MyPhoto}
              alt=""
              className="flex-shrink-0 w-80 rounded-full border-6 border-white shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  )
}
