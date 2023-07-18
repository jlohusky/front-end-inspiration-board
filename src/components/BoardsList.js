import React from 'react';
import PropTypes from 'prop-types';
import './BoardsList.css';

    // const BoardsList = (props) => {
    //     const handleBoardClick = (boardId) => {
    //         props.selectBoard(boardId);
    //     };

    //     const boardItems = props.boards.map((board) => (
    //         <li key={board.board_id} onClick={() => handleBoardClick(board.board_id)}>
    //         {board.title}
    //         </li>
    //     ));

    //     return (
    //         <section className="BoardsList__container">
    //         <ol className="BoardsList__list">{boardItems}</ol>
    //         </section>
    //     );
    //     };

    //     BoardsList.propTypes = {
    //     boards: PropTypes.arrayOf(
    //         PropTypes.shape({
    //         board_id: PropTypes.number.isRequired,
    //         title: PropTypes.string.isRequired,
    //         })
    //     ).isRequired,
    //     selectBoard: PropTypes.func.isRequired,
    //     };

const BoardsList = (props) => {
    const handleBoardClick = (boardId) => {
    props.selectBoard(boardId);
    };

    const boardItems = props.boards.map((board) => (
    <li
        key={board.board_id}
        onClick={() => handleBoardClick(board.board_id)}
    >
        {board.title}
    </li>
    ));

    return (
        <section className="boards-list__container">
            <div>
                <ul className="boards-list__list">{boardItems}</ul>
            </div>
        </section>
    );
};

BoardsList.propTypes = {
    boards: PropTypes.arrayOf(
    PropTypes.shape({
        board_id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })
    ).isRequired,
    selectBoard: PropTypes.func.isRequired,
}
export default BoardsList;
