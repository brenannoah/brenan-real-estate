import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1>Brenan Macdonald</h1>
      <p>California Realtor · DRE #02441736</p>

      <div className="card">
        <h2>Serving Sonora & Tuolumne County</h2>
        <p>
          Helping buyers and sellers with a modern, local-first approach to real estate.
        </p>
      </div>

      <div className="contact">
        <p>209-540-2950</p>
        <p>brenannoah@gmail.com</p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
