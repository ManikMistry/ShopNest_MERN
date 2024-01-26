import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

function HomePage() {
  return (
    <>
    <div>

        <MainCarousel/>
    </div>
    <div className=' space-y-10 flex flex-col justify-center py-20 px-0 lg:px-4'>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
        <HomeSectionCarousel/>
    </div>
    </>
  )
}

export default HomePage