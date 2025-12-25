import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Agence = lazy(() => import('./pages/Agence'))
const Projects = lazy(() => import('./pages/Projects'))
const Solutions = lazy(() => import('./pages/Solutions'))
const WhyFillup = lazy(() => import('./pages/WhyFillup'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const Resources = lazy(() => import('./pages/Resources'))
const Careers = lazy(() => import('./pages/Careers'))
const Investors = lazy(() => import('./pages/Investors'))
const Contact = lazy(() => import('./pages/Contact'))

import useLottiePrefetch from './hooks/useLottiePrefetch'

const App = () => {
  useLottiePrefetch()

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Suspense fallback={<div className="h-screen w-screen bg-black"></div>}>
        <Routes>
          <Route path='/' element={<Home />} />

          {/* SEO Routes */}
          <Route
            path='/digital-signage-advertising'
            element={
              <Home seo={{
                title: "Digital Signage Advertising Services",
                description: "Expert digital signage advertising services in Europe. Maximize your reach with our high-impact digital media screens.",
                keywords: "digital signage advertising, advertising screens, digital media screens service, electronic billboards"
              }} />
            }
          />
          <Route
            path='/digital-media-screens-service'
            element={
              <Home seo={{
                title: "Premium Digital Media Screens Service",
                description: "Leading digital media screens service for verified high-traffic locations. Engage your audience with dynamic screen solutions.",
                keywords: "digital media screens service, screen media, digital ooh, dooh, media agency screens"
              }} />
            }
          />
          <Route
            path='/advertising-screens-europe'
            element={
              <Home seo={{
                title: "Advertising Screens Network Europe",
                description: "Extensive network of advertising screens across Europe. Connect with customers through our digital signage solutions.",
                keywords: "advertising screens europe, digital signage network, european media screens, outdoor digital advertising"
              }} />
            }
          />

          <Route path='/agence' element={<Agence />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/why-fillup' element={<WhyFillup />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/investors' element={<Investors />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App