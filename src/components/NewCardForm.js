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

        // props.createCard(cardFormData);

        setCardFormData(INITIAL_FORM_DATA);
    };

    return(
        <div>
            <form className="form__container" onSubmit={onFormSubmit}>
                <label htmlFor="cardMessage">Message</label>
                <input
                id="message"
                name="message"
                type="text"
                value={cardFormData.message}
                onChange={inputChange}
                ></input>
                <input type="submit" value="Add a card!"></input>
            </form>
        </div>
    )
}

export default NewCardForm;