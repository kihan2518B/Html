// import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Trending from './Components/Trending';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='font-serif'>
      <Navbar />
      <Cards />
      <Trending />
    </div>
  )
}

export default App
