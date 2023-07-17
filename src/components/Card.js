import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = (props) => {

    const toggleDelete = () => {
        console.log('delete button clicked!')
        props.deleteCard(props.id)
    };

    const toggleLike = () => {
        console.log('like button clicked!')
        props.updateLikes(props.id)
    }

    const toggleUnlike = () => {
        console.log('Unlike button clicked!')
        props.updateUnlikes(props.id)
    }

    return (
        <section className="a_card" key={props.id}>
            <p>{props.cardMessage}</p>
            <ul>
                <li>{props.likesCount} ❤️</li>
                <li><button onClick={toggleLike}>+❤️</button></li>
                <li><button onClick={toggleUnlike}>-❤️</button></li>
                <li><button onClick={toggleDelete}>Delete</button></li>
            </ul>
        </section>
    )
}

export default Card;