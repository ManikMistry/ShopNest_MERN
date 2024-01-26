import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/mens_kurta'

function HomePage() {
  return (
    <>
    <div>

        <MainCarousel/>
    </div>
    <div className=' space-y-10 flex flex-col justify-center py-20 px-0 lg:px-4'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Sharee"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
    </div>
    </>
  )
}

export default HomePage