import React from 'react';
import PropTypes from 'prop-types';
import './CardsList.css'
import Card from './Card'

const CardsList = (props) => {
    const listOfCards = props.listOfCards.map((card) => {
        return (
            <Card
            id={card.id}
            cardMessage={card.message}
            likesCount={card.likes_count}
            deleteCard={props.deleteCard}
            updateLikes={props.updateLikes}
            ></Card>
        )
    })
    return(
        <section>
            {listOfCards}
        </section>

    )
}

export default CardsList;