import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {

  const Time = (props) => {

    return (
      <div className="margin_h1">

        <h1 className="App">scopri le novità del {props.day}/{props.month}/{props.year}</h1>

      </div>

    )
  };

  return (
    <div className='cards'>

      <div className='cards__container'>
        <Time day={new Date().getDate()} month={new Date().getMonth() + 1} year={new Date().getFullYear()} />
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Luce'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Gas'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Rifiuti'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Luce'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Gas'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
