import React from "react";
import  PropTypes from 'prop-types';
import "./Card.css";

import classNames from "classnames";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };
  
  return (
    <div
      className={classNames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive,
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        
      </div>
      <div className="card-face card-back-face">
        {card.number}
      </div>
    </div>
  );
};

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  card: PropTypes.shape({
    index: PropTypes.number,
  }).isRequired,
  isInactive: PropTypes.bool.isRequired,
  isFlipped: PropTypes.bool.isRequired, 
  isDisabled: PropTypes.bool.isRequired,
};

export default Card;