import { DumbbellIcon } from 'lucide-react'
import React from 'react'
import TrustedBy from './TrustedBy'

const AboutUs = () => {
  return (
    <div id="aboutus" className="bg-zinc-700">
    <div className="max-w-6xl mx-auto">
        <TrustedBy />
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 py-16 px-4">
        <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden">
            <img
                src="aboutus.png"
                alt="Fitness training"
                className="w-full object-cover rounded-2xl"
            />
            </div>
          <div className="absolute bottom-2  lg:right-[-2rem] bg-white rounded-lg px-4 py-2 flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center bg-primary/20 rounded-full">
              <DumbbellIcon className='text-orange-500 h-6 w-6'/>
            </div>
            <span className="text-sm font-medium">Professional Trainer</span>
          </div>
      </div>
      <div className="flex-1 space-y-6 ">
        <h1 className="text-4xl lg:text-4xl font-bold leading-tight text-white">
          Get Ready To Reach Your Fitness Goals
        </h1>
        <p className="text-lg text-muted-foreground text-white">
          We are a gym that is committed to helping people reach their fitness goals. 
          We offer a variety of fitness programs and services to fit your needs, whether 
          you are a experienced athlete.
        </p>
        <p className="text-lg text-muted-foreground text-white">
          We believe that everyone should have access to the benefits of exercise make it happen.
        </p>
        <button className="text-lg p-4 rounded-lg text-white hover:text-black bg-[#ea384c] hover:bg-[#ea384c]/90">
          Free Trial Today
        </button>
      </div>
    </div>
    </div>
    </div>

  )
}

export default AboutUs