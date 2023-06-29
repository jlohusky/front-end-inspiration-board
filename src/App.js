import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import CardsList from './components/CardsList'
import NewCardForm from './components/NewCardForm';

// list of components
// Monica works on Board components, Julie works on Card components
// 1. BoardsList
// 2. Board
// 3. Form for creating new board
// 4. CardsList
// 5. Cards
// 6. Form for creating new card

const INITIAL_BOARD_DATA = {
  "board_id": '',
  "cards": [],
  "title": ''
}
const INITIAL_CARD_DATA = []
// const INITIAL_CARD_DATA = [
//   {
//     id: 101,
//     message: 'testing',
//     likes_count: 2,
//     board_id: 11
//   },
//   {
//     id: 102,
//     message: 'testing 2',
//     likes_count: 3,
//     board_id: 11
//   },
//   {
//     id: 103,
//     message: 'testing 3',
//     likes_count: 5,
//     board_id: 11
//   }
// ]
  // +1 use state for number of votes

function App() {
// use state for which board is being displayed on the bottom
  // default is blank
  // GET "/<board_id>/cards" method sets use state for cards displayed

// use state for cards, initial value is blank

const [existingBoards, setExistingBoards] = useState([])
const [selectedBoard, setSelectedBoard] = useState(INITIAL_BOARD_DATA.board_id);
const [displayedCards, setDisplayedCards] = useState(INITIAL_CARD_DATA);

const getBoards = () => {
  axios.get('http://127.0.0.1:5000/board')
  .then( (response) => {
    const initialBoards = [];
    response.data.forEach(board => {
      initialBoards.push(board)
    });
    setExistingBoards(initialBoards);
    console.log('getBoards success!', existingBoards)
  })
  .catch( (error) => {
    console.log('error', error)
  });
};

useEffect( () => {getBoards()}, []);

// useEffect testing zone
useEffect( () => {getCards(1)}, []);

const getCards = (boardId) => {
  axios.get(`http://127.0.0.1:5000/board/${boardId}/cards`)
  .then( (response) => {
    // console.log('getCards success!', response.data.cards)
    const cardsToDisplay = []
    response.data.cards.forEach(card => {
      cardsToDisplay.push(card)
    });

    setDisplayedCards(cardsToDisplay);
    console.log('getCards success!', displayedCards)
  })
  .catch( (error) => {
    console.log('error', error)
  })
}

const createCard = (boardId, newCard) => {
  axios.post(`http://127.0.0.1:5000/board/${boardId}/cards`, newCard)
  .then( (response) => {
    getBoards();
    console.log('createCard sucess!', response.data)
  })
  .catch( (error) => {
    console.log('error', error)
  });
};

  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Inspiration Board</h1>
        <section className="boards__container">
          <section>
            <h2>Boards</h2>
            <ol className="boards__list">
              {/* list of existing boards, list of elements */}
              {/* boards list component (similar to StudentList) */}
              {/* onClick event calls GET "/<board_id>/cards" method */}
            </ol>
          </section>
          <section>
            <h2>Selected Board</h2>
            {/* name of board that was clicked on and is being shown */}
          </section>
          <section className='new-board-form__container'>
            <h2>Create a New Board</h2>
            {/* component to a form to create a new board */}
          </section>
        </section>
          {/* Another section to show cards */}
          {/* cards list component (similar to StudentList) */}
          {/* component to a form to create new cards for the board */}
        <section className="cards__container">
          <section>
            <h2>Cards</h2>
            <CardsList
            listOfCards={displayedCards}
            // INITIAL_CARD_DATA will be useState variable of cards
            ></CardsList>
          </section>
          <section className="new-card-form__container">
            <h2>Create a New Card</h2>
            <NewCardForm></NewCardForm>
          </section>
        </section>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
