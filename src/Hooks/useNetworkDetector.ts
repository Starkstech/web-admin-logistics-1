import { useState, useEffect } from 'react'

const useNetworkDetector = () => {
  const [isDisconnected, setIsDisconnected] = useState(false)

  const handleConnectionChange = async () => {
    const status = navigator.onLine ? 'online' : 'offline'
    if (status === 'online') {
      const webPing = setInterval(
        () => {
          fetch('//google.com', {
            mode: 'no-cors',
          })
            .then(() => {
              setIsDisconnected(false)
              return clearInterval(webPing)
            }).catch(() => setIsDisconnected(true))
        }, 2000);
    }
    return setIsDisconnected(true)
  }

  useEffect(() => {
    handleConnectionChange()
    window.addEventListener('online', handleConnectionChange)
    window.addEventListener('offline', handleConnectionChange)

    return () => {
      window.removeEventListener('online', handleConnectionChange)
      window.removeEventListener('offline', handleConnectionChange)
    }
  }, [])

  return isDisconnected
}

export default useNetworkDetector
