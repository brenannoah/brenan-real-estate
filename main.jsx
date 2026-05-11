import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function App() {
  const services = [
    {
      title: "For Buyers",
      text: "Find the right home with local guidance, smart search strategy, and honest advice from start to close.",
    },
    {
      title: "For Sellers",
      text: "Position your home with strong pricing, clean presentation, quality marketing, and clear communication.",
    },
    {
      title: "Modern Marketing",
      text: "Professional-looking photography, video, social media content, and listing presentation designed to stand out.",
    },
  ];

  const strengths = [
    "Licensed California Realtor",
    "DRE #02441736",
    "Serving Sonora and Tuolumne County",
    "Strong eye for property presentation",
    "Background in painting, prep, finishing, and visual detail",
    "Straightforward communication from beginning to end",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-lg font-bold text-neutral-950">
              BM
            </div>
            <div>
              <p className="font-semibold leading-tight">Brenan Macdonald</p>
              <p className="text-xs text-neutral-400">California Realtor · DRE #02441736</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a href="#buyers" className="hover:text-white">Buy</a>
            <a href="#sellers" className="hover:text-white">Sell</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="tel:2095402950"
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-200"
          >
            Call Me
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.09),transparent_30%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                Serving Sonora, Tuolumne County & surrounding areas
              </div>

              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Real estate with local grit and modern marketing.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                Whether you’re buying your first home, selling a property, or just trying to understand your next move, I’ll help you approach the process with clarity, confidence, and a strong game plan.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-neutral-950 hover:bg-neutral-200"
                >
                  Start Your Move
                </a>
                <a
                  href="#sellers"
                  className="rounded-2xl border border-white/20 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
                >
                  Get a Home Value
                </a>
              </div>
            </div>

            <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <img
                src="/yosemite-river.jpg"
                alt="Yosemite river and mountains"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur">
                  <p className="text-sm tracking-[0.3em] text-neutral-400">SONORA REALTOR</p>
                  <p className="mt-4 text-2xl font-semibold">Helping locals make smarter moves.</p>
                  <p className="mt-3 text-neutral-300">Homes. Land. Mountain living. Practical advice.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src="/granite-waterfall.jpg"
              alt="Mountain waterfall"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] px-6 py-14">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-white/10 bg-neutral-900/80 p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-bold text-neutral-950">
                  ✓
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-neutral-300">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="buyers" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">Buyers</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Find the home that actually fits your life.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-neutral-300">
            <p>
              Buying is more than scrolling listings. It’s knowing the neighborhoods, understanding condition, spotting red flags, and moving quickly when the right opportunity shows up.
            </p>
            <p>
              I’ll help you compare homes, understand pricing, write stronger offers, and stay organized through inspections, escrow, financing, and closing.
            </p>
          </div>
        </section>

        <section id="sellers" className="bg-neutral-900 px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">Sellers</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Your home deserves more than a basic listing.
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
                Presentation matters. With my background in property prep, finishes, photography, and visual marketing, I focus on making your home look its best before it hits the market.
              </p>
            </div>

            <div className="grid gap-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-xs font-bold text-neutral-950">✓</span>
                  <p className="text-neutral-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">About Brenan</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              A practical, local-first approach to real estate.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-300">
              I bring a hands-on background in painting, property prep, customer service, and visual presentation into real estate. That means I don’t just look at a property from a sales angle — I look at condition, curb appeal, marketability, and what can help a buyer or seller make a better decision.
            </p>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white p-8 text-neutral-950 md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">Contact</p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight">Ready to make your next move?</h2>
                <p className="mt-4 text-lg leading-8 text-neutral-700">
                  Tell me what you’re trying to do — buy, sell, invest, or just understand your options — and I’ll help you build a plan.
                </p>
              </div>

              <div className="rounded-3xl bg-neutral-100 p-6">
                <div className="space-y-4 text-lg">
                  <p><strong>Phone:</strong> <a className="underline" href="tel:2095402950">209-540-2950</a></p>
                  <p><strong>Email:</strong> <a className="underline" href="mailto:brenannoah@gmail.com">brenannoah@gmail.com</a></p>
                  <p><strong>Location:</strong> Sonora, CA</p>
                  <p><strong>License:</strong> DRE #02441736</p>
                </div>

                <a
                  href="mailto:brenannoah@gmail.com"
                  className="mt-8 block w-full rounded-2xl bg-neutral-950 px-6 py-4 text-center font-semibold text-white hover:bg-neutral-800"
                >
                  Email Brenan
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-neutral-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© 2026 Brenan Macdonald. All rights reserved.</p>
          <p>California Realtor · DRE #02441736 · Sonora, California</p>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
