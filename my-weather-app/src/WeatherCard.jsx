import React from 'react'
import LogIn from './LogIn.jsx';

function WeatherCard() {
  return (
    <>
      <div className="container-lg">
        <h1 className="display-4">Weather App</h1>

        <div className="row justify-content-center text-center p-3 border">
          <div className="col-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo explicabo laudantium, atque pariatur autem fugit quasi repellendus repellat eaque dolore voluptatum perspiciatis nostrum asperiores necessitatibus, cumque error, maiores possimus cum?</p>
          </div>
        </div>
      </div>

      <LogIn />
    </>
  )
}

export default WeatherCard;
