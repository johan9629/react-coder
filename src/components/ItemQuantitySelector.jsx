import { useState } from "react";
import Button from "react-bootstrap/Button";

export const ItemCount = ({stock, addCarrito}) => {
    const [count , setCount] = useState(1);

    const incremento = () => {
        if (count < stock) {
            setCount((prev) => prev +1)
        }
    };

    const decremento = () => {
        if (count > 1) {
            setCount((prev) => prev -1)
        }
    }

    const agreCarrito = () => {
        addCarrito(count)
        setCount(1);
    }
    
    return (
        <>
            <Button onClick={decremento} style={{width:"2rem", padding: "0"}}>-</Button>
            <span style={{margin:"0.5rem"}}>{count}</span>
            <Button onClick={incremento} style={{width:"2rem", padding: "0"}}>+</Button>
            <hr />
            <Button onClick={agreCarrito}>Agregar carrito</Button>
        </>
    )
}