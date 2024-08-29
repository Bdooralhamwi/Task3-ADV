import React, { useState } from 'react';
import "./Beast.css";

export default function Beast() {
  // Define the state to keep track of the selected property type
  const [propertyType, setPropertyType] = useState('Appartment');

  // Define content for different property types
  const properties = {
    Appartment: {
      space: '153 m2',
      floor: '21th',
      rooms: '8',
      parking: 'NO',
      payment: 'PAYPAL',
      imgSrc: '/images/deal-01.jpg',
      extraInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus fugit nisi vero ex doloribus molestias consequatur porro necessitatibus? Quae, enim atque neque at officia porro commodi quos nemo autem!',
    },
    Villa: {
      space: '350 m2',
      floor: 'Ground',
      rooms: '3',
      parking: 'Yes',
      payment: 'Direct',
      imgSrc: '/images/deal-02.jpg',
      extraInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus ',
    },
    Penthouse: {
      space: '250 m2',
      floor: '30th',
      rooms: '5',
      parking: 'Yes',
      payment: 'Installments',
      imgSrc: '/images/deal-03.jpg',
      extraInfo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus fugit nisi vero ex doloribus molestias consequatur porro necessitatibus? Quae, enim atque neque at officia porro commodi quos nemo autem!',
    },
  };

  // Set the current property based on selected property type
  const currentProperty = properties[propertyType];

  return (
    <div className='Beast-componant'>
      <div className="content">
        <div className="up">
          <div className="title">
            <h1>|BEAST DEAL</h1>
            <h2>Find Your Best Deal Right Now!</h2>
          </div>
          <div className="btn">
            <button 
              className={propertyType === 'Appartment' ? 'active' : 'solid'}
              onClick={() => setPropertyType('Appartment')}
            >
              Appartment
            </button>
            <button 
              className={propertyType === 'Villa' ? 'active' : 'solid'}
              onClick={() => setPropertyType('Villa')}
            >
              Villa House
            </button>
            <button 
              className={propertyType === 'Penthouse' ? 'active' : 'solid'}
              onClick={() => setPropertyType('Penthouse')}
            >
              Penthouse
            </button>
          </div>
        </div>
        <div className="down">
          <div className="left">
            <div className="column">
              <p>Total Flat Space</p>
              <h4>{currentProperty.space}</h4>
            </div>
            <div className="column">
              <p>Floor number</p>
              <h4>{currentProperty.floor}</h4>
            </div>
            <div className="column">
              <p>Number of rooms</p>
              <h4>{currentProperty.rooms}</h4>
            </div>
            <div className="column">
              <p>Parking Available</p>
              <h4>{currentProperty.parking}</h4>
            </div>
            <div className="column last">
              <p>Payment Process</p>
              <h4>{currentProperty.payment}</h4>
            </div>
          </div>
          <div className="center-photo">
            <img src={currentProperty.imgSrc} alt={propertyType} />
          </div>
          <div className="right">
            <div className="up-right">
              <h2>Extra Info About Property</h2>
            </div>
            <div className="center-right">
              <p>{currentProperty.extraInfo}</p>
            </div>
            <div className="down-right">
              <button style={{ cursor: "pointer" }}>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </svg>
                </a>
                <p style={{ fontWeight: "bold" }}>Schedule a visit</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
