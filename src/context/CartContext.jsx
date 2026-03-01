import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(prod =>
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};