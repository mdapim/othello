import { useState, useEffect } from 'react'

function useWindowSize(props) {
  const [width, setWidth] = useState(props)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  })

  const isMobile = width <= 768

  return isMobile
}

export default useWindowSize
