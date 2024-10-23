import React from 'react'
import { GlobalCss } from './styles.ts'
import Home from './components/Home/index.tsx'
import Banner from './components/Banner/index.tsx'
import Partners from './components/Partners/index.tsx'
import Coments from './components/Comments/index.tsx'
import SkillCards from './components/SkillCards/index.tsx'

function App() {
    return (
        <>
            <GlobalCss />
            <Home />
            <Banner />
            <Partners />
            <Coments />
            <SkillCards />
        </>
    )
}
export default App