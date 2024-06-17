import React from 'react'

import HomeImage from '@/assets/home_img.png';
import TrackerIcon from '@/assets/tracker_icon.png'
import InsightsIcon from '@/assets/insights.png'
import Security from '@/assets/security.png'
import { Button } from './components/ui/button';

const Home = () => {
  return (
    <div className='w-full bg-[whitesmoke] h-screen overflow-y-auto'>

        <div className='flex justify-evenly py-12 px-20 '>

          <div className='text-left w-2/4 py-4'>
            <h1 className='text-slate-800 mb-7 text-5xl font-bold font-serif'> Take Control of Your Finances Today </h1>
            <i className='text-2xl '> Track your income and expenses effortlessly and achieve your financial goals. </i>
            <br></br>
            <Button className='bg-slate-700 mt-10 w-56 h-14 text-lg hover:bg-slate-800 hover:transform hover:scale-105 hover:transition-all'> Get Started For Free  </Button>
          </div>

          <img src={HomeImage} className='w-2/5 h-96 -mt-4' />

        </div>

        <div className='flex items-center justify-evenly'>
          
          <div className='w-1/4 h-72 border-1 bg-blue-300 border-blue-500 p-7 flex flex-col items-center rounded-lg'>
            <img src={TrackerIcon} className='bg-white rounded-full p-2 h-20'/>
            <h2 className='text-xl font-bold mt-4' > Easy Expense Tracking </h2>
            <i className='mt-3 font-semibold'> Log your expenses in real-time with our intuitive interface. Categorize your spending and always know where your money goes. </i>
          </div>

          <div className='w-1/4 h-72 border-1 bg-green-300 border-green-500 p-7 flex flex-col items-center rounded-lg'>
            <img src={InsightsIcon} className='bg-white rounded-full p-2 h-20'/>
            <h2 className='text-xl font-bold mt-4' > Visual Insights </h2>
            <i className='mt-3 font-semibold'> Understand your spending patterns with clear charts and graphs. See your financial health at a glance. </i>
          </div>

          <div className='w-1/4 h-72 border-1 bg-yellow-300 border-yellow-500 p-7 flex flex-col items-center rounded-lg'>
            <img src={Security} className='bg-white rounded-full p-2 h-20'/>
            <h2 className='text-xl font-bold mt-4' > Secure and Private </h2>
            <i className='mt-3 font-semibold'> Your data is protected with top-notch security measures. Only you have access to your financial information. </i>
          </div>

        </div>

    </div>
  )
}

export default Home