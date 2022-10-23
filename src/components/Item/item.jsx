import React from "react";
import placeholder from "../../img/placeholder-img.png";
import "./style.scss";

const Item = (props) => {
  const { id, title, point, description, isFromCheckout, quantity } = props;
  return (
    <div className="item">
      <div className="item-description">
        <div className="img-container">
          <img src={placeholder} alt={title} />
        </div>
        <div className="item-name">{title}</div>
        <div className="item-pricing">
          {description ? (
            <span className="discount-banner">{description}</span>
          ) : (
            ""
          )}
          {isFromCheckout ? (
            <span className="item-quantity">Added Qty: {quantity}</span>
          ) : (
            <button onClick={() => props.addToCart(id)}>
              {description ? (
                <span className="item-discount">{"+" + point}</span>
              ) : (
                ""
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { Item };
