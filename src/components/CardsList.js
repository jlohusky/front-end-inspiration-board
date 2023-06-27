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
            likesCount={card.likesCount}
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