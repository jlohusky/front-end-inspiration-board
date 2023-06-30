import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css'

const INITIAL_FORM_DATA = {
    message: ''
}

const NewCardForm = (props) => {
    const [cardFormData, setCardFormData] = useState(INITIAL_FORM_DATA);

    const inputChange = (event) => {
        const newCardFormData = {
            ...cardFormData,
            [event.target.name]: event.target.value
        };

        setCardFormData(newCardFormData);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        props.createCard(props.boardId, cardFormData);

        setCardFormData(INITIAL_FORM_DATA);
    };

    return(
        <div>
            <form className="form__container" onSubmit={onFormSubmit}>
                <label htmlFor="cardMessage">Message</label>
                <textarea
                className="form__container-message"
                id="message"
                name="message"
                type="text"
                value={cardFormData.message}
                onChange={inputChange}
                maxLength={250}
                placeholder="250 character count limit"
                ></textarea>
                <input type="submit" value="Add a card!"></input>
            </form>
        </div>
    )
}

export default NewCardForm;