import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from "./components/Navbar"
import Coins from './components/Coins'
import CoinDetails from './routers/CoinDetails'

export default function App () {

  const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"

  const [coins, setCoins] = useState([])
  useEffect(()=>{
    axios.get(apiURL)
      .then(response => {
        setCoins(response.data)
        //console.log(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path='/coins/:coinID' element={<CoinDetails />}/>
      </Routes>
    </>

    

  )
}


