import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import CardsList from './components/CardsList'
import NewCardForm from './components/NewCardForm';

const INITIAL_BOARD_DATA = {
  "board_id": '',
  "cards": [],
  "title": ''
}
const INITIAL_CARD_DATA = []

function App() {
const [existingBoards, setExistingBoards] = useState([])
const [selectedBoard, setSelectedBoard] = useState(INITIAL_BOARD_DATA);
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
    setSelectedBoard(response.data)
    console.log('getCards success!', displayedCards)
    console.log('getCards success 2!', selectedBoard)
  })
  .catch( (error) => {
    console.log('error', error)
  })
}

const createCard = (boardId, newCard) => {
  axios.post(`http://127.0.0.1:5000/board/${boardId}/cards`, newCard)
  .then( (response) => {
    getBoards();
    getCards(boardId);
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
            <NewCardForm
            createCard={createCard}
            boardId={selectedBoard.board_id}></NewCardForm>
          </section>
        </section>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
