import React, { createContext, useContext, useState, useEffect } from 'react'

const IsMobileContext = createContext({})

export const IsMobileProvider = (props) => {
  const [isMobile, setIsMobile] = useState(false)
   
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <IsMobileContext.Provider value={{isMobile}}>
      { props.children}
    </IsMobileContext.Provider>
  )
}

export const useIsMobile = () => {
  return useContext(IsMobileContext)
}
