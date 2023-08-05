import React from 'react'
import {Link} from 'react-router-dom'


const Coins = (props) => {

  return (
    <div className='container'>
        <div className='row-head'>
            <p>#</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>MktCap</p>
        </div>

        {props.coins.map((coin) => {
            return <Link to={`/coins/${coin.id}`} key={coin.id}>
               <div className='coin-row'>
                    <p>{coin.market_cap_rank}</p>
                    <div className='coin-img-container'>
                        <img src={coin.image} alt='crypto symbol' />
                        <p>{coin.symbol.toUpperCase()}</p>
                    </div>
                    <p>${coin.current_price.toLocaleString()}</p>
                    <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    <p className='hide-mobile'>${coin.total_volume.toLocaleString()}</p>
                    <p className='hide-mobile'>${coin.market_cap.toLocaleString()}</p>
                </div> 
            
            </Link>
        })}





    </div>
  )
}

export default Coins