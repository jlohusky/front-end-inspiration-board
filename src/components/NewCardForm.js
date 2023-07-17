import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css'

const INITIAL_FORM_DATA = {
    message: ''
}

const NewCardForm = (props) => {
    const [cardFormData, setCardFormData] = useState(INITIAL_FORM_DATA);
    const [cardLength, setCardLength] = useState(0);

    let formStyle = 'form__container-message';
    if (cardLength > 40) {
        console.log("card length is greater than 40!")
        formStyle = 'form__container-error'
    }
    
    const inputChange = (event) => {
        const newCardFormData = {
            ...cardFormData,
            [event.target.name]: event.target.value
        };
        setCardFormData(newCardFormData);
        setCardLength(event.target.value.length);
        // if (cardLength > 40) {
        //     console.log("card length is greater than 40!")
        //     formStyle = 'form__container-error'
        // }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if (cardLength > 40) {
            console.log("card length is greater than 40!")
            setCardLength(0);
        } else {
            props.createCard(props.boardId, cardFormData);
        };

        setCardFormData(INITIAL_FORM_DATA);
    };

    return(
        <div>
            <form className="form__container" onSubmit={onFormSubmit}>
                <label htmlFor="cardMessage">Message</label>
                <textarea
                className={formStyle}
                id="message"
                name="message"
                type="text"
                value={cardFormData.message}
                onChange={inputChange}
                placeholder="40 character count limit"
                ></textarea>
                <input type="submit" value="Add a card!"></input>
            </form>
        </div>
    )
}

export default NewCardForm;