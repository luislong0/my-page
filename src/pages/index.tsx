/* eslint-disable react-hooks/exhaustive-deps */
import Hero from '@/components/Sessions/Hero'
import { RightBar } from '@/components/RightBar'
import About from '@/components/Sessions/About'
import Portfolio from '@/components/Sessions/Portfolio'
import Services from '@/components/Sessions/Services'
import Contact from '@/components/Sessions/Contact'
import Layout from '@/layout'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <RightBar />
    </Layout>
  )
}
