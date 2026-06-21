import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const slides = ['/slides/slide1.jpg', '/slides/slide2.jpg']

function SlideshowBackground() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slideshow-bg" aria-hidden="true">
      {slides.map((src, i) => (
        <div
          key={src}
          className={i === current ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const handleRestart = () => setCount(0)
  const handleRefresh = () => window.location.reload()

  return (
    <>
      <SlideshowBackground />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button className="restart-btn" onClick={handleRestart}>
          Restart
        </button>
        <button className="refresh-btn" onClick={handleRefresh}>
          Refresh
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
