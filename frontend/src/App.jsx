import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000'
    fetch(`${apiBase}/api/hello/`)
      .then(r => r.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Could not reach API'))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>My App</h1>
      <p>{message}</p>
    </div>
  )
}

export default App