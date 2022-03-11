import { createContext } from 'react';

const CartContext = createContext({
    hidden: true,
    togglHidden: () => { }
});

export default CartContext