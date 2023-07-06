// Write your code here

import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(eachCartItem => {
        totalPrice = totalPrice + eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="total-order-heading">
              Order Total:
              <span className="total-price"> RS {totalPrice}/-</span>
            </h1>
            <p className="summary-desc">{cartList.length} items in cart</p>
            <button type="button" className="check-out-button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
