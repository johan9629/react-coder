import { createContext, useState } from "react";

export const ItemsContext = createContext();

export const Provider = ({ children }) => {
    const [items,setItems] = useState([]);  

    const reset = () => setItems([]);

    const addItem = (item) => {
        const itemExist = items.some((i) => i.id === item.id);
        console.log(item);
        console.log(items)
        if (itemExist) {
            const transform = items.map((i) => {
                if(i.id === item.id){
                    return { ...i , quatity: i.quantity + item.quantity }
                } else {
                    return i;
                }
            });
            setItems(transform)
        } else {
            setItems((prev) => [...prev, item])
        }
    };

    const removeItem = (id) => {
        const remove = items.find((i) => i.id !== id);
        setItems(remove);
        }

    return (
        <ItemsContext.Provider value={{items, reset, addItem, removeItem}}>
            {children}
        </ItemsContext.Provider>
    )
}