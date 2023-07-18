import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import CardsList from './components/CardsList'
import NewCardForm from './components/NewCardForm';
import BoardsList from './components/BoardsList';
import NewBoardForm from './components/NewBoardForm';
import Footer from './components/Footer'

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
  axios.get('https://inspiration-board-sybl.onrender.com/board')
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

// this is the function that sets selectedBoard and displayedCards
const getCards = (boardId) => {
  axios.get(`https://inspiration-board-sybl.onrender.com/board/${boardId}/cards`)
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
  axios.post(`https://inspiration-board-sybl.onrender.com/board/${boardId}/cards`, newCard)
  .then( (response) => {
    getBoards();
    getCards(boardId);
    console.log('createCard sucess!', response.data)
  })
  .catch( (error) => {
    console.log('error', error)
  });
};

const deleteCard = (cardId) => {
  axios.delete(`https://inspiration-board-sybl.onrender.com/cards/${cardId}`)
  .then( (response) => {
    // eslint-disable-next-line
    const updatedCards = displayedCards.map(card => {
      if (card.id !== cardId) {
        return {...card};
      }
    });

    const filteredUpdatedCards = updatedCards.filter(function (element) {
      return element !== undefined;
    });

    console.log('deleteCard success!', response.data)
    setDisplayedCards(filteredUpdatedCards);
  })
  .catch( (error) => {
    console.log('could not delete task', error)
  });
};

const updateLikes = (cardId) => {
  axios.put(`https://inspiration-board-sybl.onrender.com/cards/${cardId}/like`)
  .then( (response) => {
    const updatedCards = displayedCards.map(card => {
      if (card.id === cardId) {
        return {...card,likes_count: card.likes_count++}
        } else {
          return {...card}
        }
    })

    setDisplayedCards(updatedCards);
    getCards(selectedBoard.board_id)
  })
  .catch( (error) => {
    console.log('could not update likes', error);
  })
}

const updateUnlikes = (cardId) => {
  axios.put(`https://inspiration-board-sybl.onrender.com/cards/${cardId}/unlike`)
  .then( (response) => {
    const updatedCards = displayedCards.map(card => {
      if (card.id === cardId) {
        if (card.likes_count > -1) 
        {
          return {...card,likes_count: card.likes_count--}
        }
        } else {
          return {...card}
        }
    })

    setDisplayedCards(updatedCards);
    getCards(selectedBoard.board_id)
  })
  .catch( (error) => {
    console.log('could not update unlikes', error);
  })
}

const createNewBoard = (newBoard) => {
  axios
    .post('https://inspiration-board-sybl.onrender.com/board', newBoard)
    .then((response) => {
      getBoards();
      console.log('createNewBoard success!', response.data);
    })
    .catch((error) => {
      console.log('error', error);
    });
};
const handleBoardClick = (boardId) => {
  getCards(boardId);
};

// eslint-disable-next-line
useEffect( () => {getBoards()}, []);

// useEffect testing zone - to be deleted after BoardsList is implemented
// eslint-disable-next-line
useEffect( () => {getCards(1)}, []);

  return (
    <div className="page__container" class="content">
      <div className="content__container">
        <h1 class="shimmer">✨ Inspiration Board ✨</h1>
        <section className="boards__container">
          <section>
            <h2 class="boards">Boards</h2>
            <ol className="boards__list">
              <BoardsList boards={existingBoards} selectBoard={handleBoardClick} />

              {/* list of existing boards, list of elements */}
              {/* boards list component (similar to StudentList) */}
              {/* onClick event calls GET "/<board_id>/cards" method */}
            </ol>
          </section>
          <section>
            <h2 class="selectedBoard">Selected Board</h2>
            <p>{selectedBoard.title}</p>
            {/* name of board that was clicked on and is being shown */}
          </section>
          <section className='new-board-form__container'>
            <section className='new-board-form__container'>
            <NewBoardForm createNewBoard={createNewBoard} />
          </section>
            {/* component to a form to create a new board */}
          </section>
        </section>
          {/* Another section to show cards */}
          {/* cards list component (similar to StudentList) */}
          {/* component to a form to create new cards for the board */}
        <section className="cards__container">
          <section>
            <h2 class="cards">Cards</h2>
            <CardsList
            listOfCards={displayedCards}
            deleteCard={deleteCard}
            updateLikes={updateLikes}
            updateUnlikes={updateUnlikes}
            ></CardsList>
          </section>
          <section className="new-card-form__container">
            <h2 class="createCard">Create a New Card</h2>
            <NewCardForm
            createCard={createCard}
            boardId={selectedBoard.board_id}></NewCardForm>
          </section>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
