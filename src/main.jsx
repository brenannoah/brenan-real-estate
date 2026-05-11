# Replace `src/main.jsx` with this

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function App() {
  return (
    <div>
      <header className="hero">
        <div className="overlay">
          <div className="hero-content">
            <p className="tag">SONORA • TUOLUMNE COUNTY • CALIFORNIA</p>
            <h1>Brenan Macdonald</h1>
            <h2>California Realtor · DRE #02441736</h2>

            <p className="description">
              Helping buyers and sellers navigate the local market with a modern,
              local-first approach to real estate.
            </p>

            <div className="buttons">
              <a href="tel:2095402950" className="primary-btn">
                Call Now
              </a>

              <a href="mailto:brenannoah@gmail.com" className="secondary-btn">
                Email Me
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="card-grid">
          <div className="card">
            <h3>For Buyers</h3>
            <p>
              Guidance through home searches, offers, negotiations, inspections,
              and closing.
            </p>
          </div>

          <div className="card">
            <h3>For Sellers</h3>
            <p>
              Clean presentation, strong marketing, and strategic pricing to help
              your home stand out.
            </p>
          </div>

          <div className="card">
            <h3>Local Knowledge</h3>
            <p>
              Focused on Sonora, Tuolumne County, and surrounding Sierra foothill
              communities.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-box">
          <h2>About Brenan</h2>

          <p>
            With a background in painting, property presentation, photography,
            and customer service, I bring a practical eye and modern marketing
            mindset into real estate.
          </p>

          <p>
            Whether you're buying your first home, selling property, or exploring
            your options, my goal is to make the process straightforward,
            professional, and stress-free.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-box">
          <h2>Contact</h2>

          <p><strong>Phone:</strong> 209-540-2950</p>
          <p><strong>Email:</strong> brenannoah@gmail.com</p>
          <p><strong>Location:</strong> Sonora, California</p>
          <p><strong>License:</strong> DRE #02441736</p>
        </div>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
