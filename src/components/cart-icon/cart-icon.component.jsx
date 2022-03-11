import React,{useContext} from 'react';
import {CartContext} from '../../providers/cart/cart.provider'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  const { toggleHidden } = useContext(CartContext);
  return (
    <div className='cart-icon' onClick={ toggleCartHidden }>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{ itemCount }</span>
    </div>
  );
};

export default CartIcon;
