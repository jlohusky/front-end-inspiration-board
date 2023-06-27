import React from 'react'
import './App.css';

import CardsList from './components/CardsList'

// list of components
// Monica works on Board components, Julie works on Card components
// 1. BoardsList
// 2. Board
// 3. Form for creating new board
// 4. CardsList
// 5. Cards
// 6. Form for creating new card

// INITIAL_BOARD_DATA
const INITIAL_CARD_DATA = [
  {
    id: 101,
    message: 'testing',
    likesCount: 2
  },
  {
    id: 102,
    message: 'testing 2',
    likesCount: 3
  }
]
  // +1 use state for number of votes
  // talk to Angie and Jen if that is in the backend

function App() {
// use state for which board is being displayed on the bottom
  // default is blank
// use state for cards 

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
          {/* Another section to show cards */}
          {/* cards list component (similar to StudentList) */}
          {/* component to a form to create new cards for the board */}
        </section>
        <section className="cards__container">
          <section>
            <h2>Cards</h2>
            <CardsList
            listOfCards={INITIAL_CARD_DATA}
            ></CardsList>
          </section>
          <section className="new-card-form__container">
            <h2>Create a New Card</h2>
          </section>
        </section>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
