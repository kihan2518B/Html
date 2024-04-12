// import { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
// import Cards from './Components/Cards';
import Trending from './Components/Trending';
import Footer from './Components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="font-serif h-[100vh]">

      <div className=' bg-white'>
        <Navbar />
        {/* <Cards /> */}
        <Trending />
      </div>
      <Footer />
    </div>
  )
}

export default App
