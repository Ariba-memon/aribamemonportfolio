import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default function Services() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-50 pt-20 pb-28 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl font-serif text-gray-600 hover:text-purple-600">
              Services
            </h1>
            <p className="pt-2 font-sans">Here what I offer</p>
          </div>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="relative">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>

              <div className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12">
                <h2 className="pt-3 font-bold text-2xl">Responsive Websites</h2>
                <p className="pt-3 text-justify  ">
                  When designing a responsive website for your service, It is
                  important to prioritize the user experience.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>

              <div className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12">
                <h2 className="pt-3 font-bold text-2xl">Web Apps</h2>
                <p className="pt-3 text-justify ">
                  I will create a web apps for your business and i will provide
                  a best service for your mobile app
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-10 inset-0 bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>

              <div className="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12">
                <h2 className="pt-3 font-bold text-2xl">Consultation</h2>
                <p className="pt-3 text-justify ">
                  I will Provide a 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
