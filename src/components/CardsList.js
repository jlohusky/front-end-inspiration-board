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
            updateUnlikes={props.updateUnlikes}
            ></Card>
        )
    })
    return(
        <section className='CardsList__container'>
            {listOfCards}
        </section>

    )
}

export default CardsList;