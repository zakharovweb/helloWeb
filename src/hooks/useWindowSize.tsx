import React, { useState, useEffect } from 'react'

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    size: undefined,
  })
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        const w = window.innerWidth
        let size = 'xs'
        if (w >= 600) {
          size = 'sm'
        }
        if (w >= 960) {
          size = 'md'
        }
        if (w >= 1280) {
          size = 'lg'
        }
        if (w >= 1920) {
          size = 'xl'
        }
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          size: size,
        })
      }
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => {
        return window.removeEventListener('resize', handleResize)
      }
    }
  }, [])
  return windowSize
}
