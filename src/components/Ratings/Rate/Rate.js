import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './rate.css'

const Rate = ({ rate, setRate, editable, additionalClass }) => {

    const checkedClassName = (num) => (num <= rate)
        ? 'rate-checked'
        : 'rate-unchecked'

    const isEditable = () => (editable)
        ? 'rate-editable'
        : null

    const generateRatingItem = (icon, number) =>
        <FontAwesomeIcon
            icon={icon}
            className={`rate rate-${number} ${checkedClassName(number)} ${isEditable()} fas fa-coffee`}
            onClick={() => setRate(number)}
        />

    return (
        <span className={`rate-box ${additionalClass}`}>
            {generateRatingItem(faCoffee, 1)}
            {generateRatingItem(faCoffee, 2)}
            {generateRatingItem(faCoffee, 3)}
            {generateRatingItem(faCoffee, 4)}
            {generateRatingItem(faCoffee, 5)}
        </span>
    )
}

Rate.defaultProps = {
    rate: 0,
    setRate: () => null, /*You need to add setRate prop to use this.*/
    editable: false, /* Normally user cannot edit rating (in contrast to AddRating) */
    additionalClass: '',
}

export default Rate