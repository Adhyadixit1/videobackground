import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, useLocation } from 'react-router-dom'
import NavContext from './context/NavContext.jsx'
import SplashScreen from './components/common/SplashScreen.jsx'

const Root = () => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  return (
    <>
      {isLoading && (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      )}

      {/* 
        CRITICAL PERFORMANCE FIX:
        We mount the App immediately but hide it with opacity/visibility.
        This allows the browser to fetch and buffer the hero video + images
        background while the splash screen is playing.
        
        When isLoading becomes false, the video is already ready to play instantly.
      */}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
          height: isLoading ? '0px' : 'auto', // Prevent scrollbars during load
          overflow: isLoading ? 'hidden' : 'visible',
          visibility: isLoading ? 'hidden' : 'visible' // Ensure it doesn't INTERACT but LOADS
        }}
      >
        <NavContext>
          <App />
        </NavContext>
      </div>
    </>
  )
}

import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './context/LanguageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <Root />
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)