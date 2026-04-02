import { Suspense } from 'react';
import './App.css'
import Countries from './components/countries/Countries'

function App() {

  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then((res)=>res.json());

  return (
    <>

     <h1>React World On the Go</h1> 
     <Suspense fallback={<h2>Countries are Loading...</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
     </Suspense>

     
    </>
  )
}

export default App
