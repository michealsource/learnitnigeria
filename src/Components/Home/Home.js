import React from 'react'
import FirstSection from '../FirstSection/FirstSection'
import SecondSection from '../SecondSection/SecondSection'
import Bootcamp from '../Bootcamp/Bootcamp'
import Team from '../Team/Team'
import Carousel from '../Carousel/Carousel'
function Home() {
    return (
        <>
            <Carousel/>
            <FirstSection/>
            <SecondSection/>
            <Bootcamp/>
            <Team/>
        </>
    )
}

export default Home
