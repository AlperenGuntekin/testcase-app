import React from "react";
import "./style.scss";
import { Item } from "../Item";
import { connect } from "react-redux";

class List extends React.Component {
  state = {
    items: this.props.items
  };
  addToCart = (itemId) => {
    this.props.add2CartAction(itemId);
  };
  goToCart = () => {
    this.props.history.push({
      pathname: "/order"
    });
  };
  render() {
    const { items } = this.state;
    return (
      <div id="list-page" className="page-container">
        <div className="page-content">
          <div className="page-header">
            <span className="page-title">
              TestCase <b> APP </b>
            </span>
            <button onClick={this.goToCart}>
              Points:
              <span className="cart-icon" />
            </button>
          </div>
          <div className="body-title">
            <h3>Actions to be completed</h3>
          </div>
          <div className="cart-items">
            {items.map((item, idx) => (
              <Item key={item.id} {...item} addToCart={this.addToCart} />
            ))}
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

const connection = connect(mapStateToProps, { add2CartAction })(List);

export { connection as List };
export default List;
