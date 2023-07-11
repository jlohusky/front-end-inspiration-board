import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = ({ createNewBoard }) => {
    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

    const handleTitleChange = (event) => {
    setTitle(event.target.value);
    };

    const handleOwnerChange = (event) => {
    setOwner(event.target.value);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    createNewBoard({ title, owner });
    setTitle('');
    setOwner('');
    };

    return (
    <div className="new-board-form__container">
        <h2 className="newBoard">Create a New Board</h2>
        <form className="form__container" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
        <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter title"
            required
        />
        <label htmlFor="owner">Owner</label>
        <input
            type="text"
            id="owner"
            name="owner"
            value={owner}
            onChange={handleOwnerChange}
            placeholder="Enter owner"
            required
        />
        <button type="submit">Create</button>
        </form>
    </div>
    );
};

NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
