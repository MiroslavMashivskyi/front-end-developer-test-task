import React, {useState} from 'react';
import {currentPrices,  price_model} from './API/price';
import  './styles.css';

const TestApp = () => {

  const[currentPrice, setCurrentPrice] = useState(0);

  const submit = (event: any) => {
    event.preventDefault();
    if(currentPrice === currentPrices[0]) {
      alert('low price model')
    } else if (currentPrice === currentPrices[1]) {
      alert('middle price model')
    } else {
      alert('high price model')
    }
  }


  return (
    <form className="form" onSubmit = {(event) => {
      submit(event);
    }}>
      <div className="top">
        <div className="headers">
          <span>Тип</span>
          <span>Ціна</span>
        </div>
        <div >
          <div className="article">
            <input
                type="radio"
                id="low"
                value={500}
                name='price'
                onChange={(e:any) => setCurrentPrice(currentPrices[0])}
                className="input"
              />
              <label htmlFor="low" className="label">
                <span>
                  {price_model.low} г
                </span>
                <span>
                  {currentPrices[0]} грн.
                </span>

              </label>
              <br />
          </div>
          <div className="article">
            <input
                type="radio"
                id="low"
                value={100}
                name='price'
                onChange={(e:any) => setCurrentPrice(currentPrices[1])}
                className="input"
              />
              <label htmlFor="low" className="label">
                <span>
                  {price_model.middle} г
                </span>
                <span>
                  {currentPrices[1]} грн.
                </span>

              </label>
              <br />
          </div>
          <div className="article">
            <input
                type="radio"
                id="low"
                value={50}
                name='price'
                onChange={(e:any) => setCurrentPrice(currentPrices[2])}
                className="input"
              />
              <label htmlFor="low" className="label">
                <span>
                  { price_model.high} г
                </span>
                <span>
                  {currentPrices[2]} грн.
                </span>

              </label>
              <br />
          </div>
        </div>
      </div>
      <div className="bottom">
        <span className="selected_price">
          {currentPrice} грн.
        </span>
        <button className="button">
          <img src="/images/supermarket.png" alt=""/>
          До кошика
        </button>
      </div>
    </form>
  )
}

export default TestApp
