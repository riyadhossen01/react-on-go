import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {
  return (
    <>
      <section id="center">
        <h1 className="title">React on Go</h1>
        <h2>Total Countries Visited: </h2>

        <Suspense fallback={<div>Loading...</div>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
      </section>
    </>
  )
}

export default App
