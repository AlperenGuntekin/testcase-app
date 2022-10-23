import React from "react";
import "./style.scss";
import { Item } from "../Item";
import { connect } from "react-redux";
import lessthan from "../../img/lessthan.png";

class Checkout extends React.Component {
  state = {
    items: this.props.items
  };
  addToCart = (itemId) => {
    this.props.add2CartAction(itemId);
  };
  removeFromCart = (itemId) => {
    this.props.removeFromCartAction(itemId);
  };
  navBack = () => {
    this.props.history.push({ pathname: "/" });
  };
  render() {
    const { items } = this.state;
    return (
      <div id="checkout-page" className="page-container">
        <div className="page-content">
          <div className="page-header">
            <span className="page-title">
              <img alt="img" src={lessthan} onClick={this.navBack} /> Completed
              actions
            </span>
          </div>
          <div className="cart-items">
            {items.map((item, idx) =>
              item.quantity ? (
                <Item
                  isFromCheckout={true}
                  key={item.id}
                  {...item}
                  addToCart={this.addToCart}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const add2CartAction = (itemId) => (dispatch) => {
  dispatch({ type: "addToCart", payload: itemId });
};

const removeFromCartAction = (itemId) => (dispatch) => {
  dispatch({ type: "removeFromCart", payload: itemId });
};

const connection = connect(mapStateToProps, {
  add2CartAction,
  removeFromCartAction
})(Checkout);

export { connection as Checkout };
