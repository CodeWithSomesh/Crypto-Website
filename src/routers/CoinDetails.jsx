import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import DOMPurify, { sanitize } from 'dompurify'

const CoinDetails = () => {

  const param = useParams()
  const [coinDetails, setCoinDetails] = useState([])
  const apiURL = `https://api.coingecko.com/api/v3/coins/${param.coinID}`

  useEffect(()=> {
    axios.get(apiURL)
    .then(res => {
      return setCoinDetails(res.data)
      //console.log(res.data)
    }).catch(error => console.log(error))
  }, [])



  return (
    <div className="container">
      <div className="coinDetail-name">
        <h1>{coinDetails.name}</h1>
      </div>

      <div className="content">
        <div className="rank">
          <span className="rank-btn">Rank # {coinDetails.market_cap_rank}</span>
        </div>

        <div className="info">
          <div className="coin-heading">
            {coinDetails.image ? (
              <img src={coinDetails.image.small} alt="" />
            ) : null}
            <p>{coinDetails.name}</p>
            {coinDetails.symbol ? (
              <p>({coinDetails.symbol.toUpperCase()}/USD)</p>
            ) : null}
          </div>
        

          <div className="coin-market-price">
            {coinDetails.market_data?.current_price ? (
              <h1>
                ${coinDetails.market_data.current_price.usd.toLocaleString()}
              </h1>
            ) : null}
          </div>
        </div>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {coinDetails.market_data
                  ?.price_change_percentage_1h_in_currency ? (
                  <p>
                    {coinDetails.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td>
                {coinDetails.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinDetails.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td>
                {coinDetails.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinDetails.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td>
                {coinDetails.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinDetails.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td>
                {coinDetails.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinDetails.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
              <td>
                {coinDetails.market_data
                  ?.price_change_percentage_24h_in_currency ? (
                  <p>
                    {coinDetails.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </p>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content">
        <div className="stats">
          <div className="left">
            <div className="row">
              <h4>24 Hour Low</h4>
              {coinDetails.market_data?.low_24h ? (
                <p>${coinDetails.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div className="row">
              <h4>24 Hour High</h4>
              {coinDetails.market_data?.high_24h ? (
                <p>${coinDetails.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}{" "}
            </div>
          </div>
          <div className="right">
            <div className="row">
              <h4>Market Cap</h4>
              {coinDetails.market_data?.market_cap ? (
                <p>${coinDetails.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div className="row">
              <h4>Circulating Supply</h4>
              {coinDetails.market_data ? (
                <p>{coinDetails.market_data.circulating_supply}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>


      <div className="content">
        <div className="about">
                <h3>About</h3>
                <p dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(coinDetails.description ? coinDetails.description.en : ""),
                }}>
                </p>
        </div>

      </div>



    </div>
  );
}

export default CoinDetails