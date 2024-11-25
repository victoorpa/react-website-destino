import { useState } from 'react'
import './App.css'
import css from './assets/components/nosotros.module.css';
import NavBar from './assets/components/NavBar'
import ContentHeader from './assets/components/ContentHeader'
import BannerHeader from './assets/components/BannerHeader'
import ExperienceSection from './assets/components/ExperienceSection'
import ValueSection from './assets/components/ValueSection'
import StatisticsSection from './assets/components/StatisticsSection'
import PriceSection from './assets/components/PriceSection'
import ContactSection from './assets/components/ContactSection'
import TestimonialSection from './assets/components/TestimonialSection'
import Footer from './assets/components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className={css.header}>
        <NavBar />
        <ContentHeader />
      </header>
      <BannerHeader />
      <ExperienceSection />
      <ValueSection />
      <StatisticsSection />
      <PriceSection />
      <ContactSection />
      <TestimonialSection />
      <Footer />
    </>
  )
}

export default App
