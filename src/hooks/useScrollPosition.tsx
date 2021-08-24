import React, { useState, useEffect } from 'react'

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(undefined)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleScroll() {
        setScrollPosition(window.pageYOffset)
      }
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => {
        return window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])
  return scrollPosition
}
