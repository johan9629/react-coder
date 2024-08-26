import carrito from "../assets/img/carrito.png"
import { Link } from "react-router-dom";

export const CarWidget = () => {
    return (
    <Link to="/cart">
        <img src={carrito} height={30} />
        <span>1</span>
    </Link>
    )
}; 
