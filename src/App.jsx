import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import ScrollToTop from './components/common/ScrollToTop'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Agence = lazy(() => import('./pages/Agence'))
const Projects = lazy(() => import('./pages/Projects'))
const Solutions = lazy(() => import('./pages/Solutions'))
const WhyFillup = lazy(() => import('./pages/WhyFillup'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'))
const Resources = lazy(() => import('./pages/Resources'))
const Careers = lazy(() => import('./pages/Careers'))
const Investors = lazy(() => import('./pages/Investors'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'))

// Solution Sub-pages
const SolutionPages = lazy(() => import('./pages/SolutionPages'))
import {
  StationServiceDisplay, DigitalPump, DigitalTotems, GasStationNetwork,
  OutdoorScreens, OutdoorDisplay, LEDWalls, PromotionalScreen, VideoWalls,
  StationNetwork, MenuBoards, FuelAdvertising, InfoDisplays, DigitalScreen,
  InteractiveKiosk
} from './pages/SolutionPages'

import useLottiePrefetch from './hooks/useLottiePrefetch'

const App = () => {
  useLottiePrefetch()

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <ScrollToTop />
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

          {/* Solution Sub-pages */}
          <Route path='/solutions/lcd-screens' element={<SolutionPages />} />
          <Route path='/solutions/station-service-display' element={<StationServiceDisplay />} />
          <Route path='/solutions/digital-pump' element={<DigitalPump />} />
          <Route path='/solutions/digital-totems' element={<DigitalTotems />} />
          <Route path='/solutions/gas-station-network' element={<GasStationNetwork />} />
          <Route path='/solutions/outdoor-screens' element={<OutdoorScreens />} />
          <Route path='/solutions/outdoor-display' element={<OutdoorDisplay />} />
          <Route path='/solutions/led-walls' element={<LEDWalls />} />
          <Route path='/solutions/promotional-screen' element={<PromotionalScreen />} />
          <Route path='/solutions/video-walls' element={<VideoWalls />} />
          <Route path='/solutions/station-network' element={<StationNetwork />} />
          <Route path='/solutions/menu-boards' element={<MenuBoards />} />
          <Route path='/solutions/fuel-advertising' element={<FuelAdvertising />} />
          <Route path='/solutions/info-displays' element={<InfoDisplays />} />
          <Route path='/solutions/digital-screen' element={<DigitalScreen />} />
          <Route path='/solutions/interactive-kiosk' element={<InteractiveKiosk />} />
          <Route path='/why-fillup' element={<WhyFillup />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/case-studies/:id' element={<CaseStudyDetail />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/investors' element={<Investors />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<TermsOfUse />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App