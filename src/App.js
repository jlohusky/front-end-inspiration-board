import './App.css';

function App() {
  return (
    <div className="page__container">
      <div className="content__container">
        <h1>Inspiration Board</h1>
        <section className="boards__container">
          <section>
            <h2>Boards</h2>
            <ol className="boards__list">
              {/* Insert boards here */}
            </ol>
          </section>
          <section>
            <h2>Selected Board</h2>
            <p>Instructions to select a board</p>
          </section>
          <section className='new-board-form__container'>
            <h2>Create a New Board</h2>
          </section>
        </section>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
