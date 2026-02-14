import { createContext, useState } from "react";

// 1. Creamos el Contexto 
export const CartContext = createContext();

// 2. Creamos el Custom Provider 
export const CartProvider = ({ children }) => {
    // Estado principal: El array de productos en el carrito
    const [cart, setCart] = useState([]);

    // Función para agregar o actualizar cantidad
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            // Si ya está, mapeamos el array y le sumamos la cantidad nueva al producto existente
            setCart(cart.map(prod =>
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            ));
        } else {
            // Si no está, lo agregamos al array copiando el objeto e inyectándole la cantidad
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Función para eliminar un producto específico por ID
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    // Función para vaciar todo el carrito
    const clear = () => {
        setCart([]);
    };

    // Función auxiliar para saber si un producto ya está en el carrito
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    // Función para calcular la cantidad TOTAL de productos (para el CartWidget)
    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    // Función para calcular el precio TOTAL de la compra
    const cartTotal = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
    };

    // 3. Retornamos el Provider envolviendo a los "children" y pasándole toda la lógica en "value"
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};