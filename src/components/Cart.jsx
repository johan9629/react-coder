import { useState, useContext } from "react"
import { ItemsContext } from "../context/ItemsContext"
import { Button, Container } from "react-bootstrap"
import { addDoc, collection, getFirestore } from "firebase/firestore";


const inicialValues = {
    nombre: "",
    celular: "",
    correo: ""
};

export const Cart = () => {
    const [formulario, setFormulario] = useState(inicialValues);
    const { items, reset, removeItem} = useContext(ItemsContext)
    const totales = items.reduce((acum, act) => acum + act.precio * act.quantity, 0);

    const handleChange = (ev) => {
        setFormulario((prev) => {
            return { ...prev, [ev.target.name]: ev.target.value};
        });
    };

    const handleOrder = () => {
        const order = {
            formulario,
            items,
            totales
        };

        const db  = getFirestore();
        const orderCollection = collection (db, "orders");

        addDoc( orderCollection, order).then(({ id }) => {
            if(id) {
                alert("Su orden " + id + " ha sido completada!");
                reset();
                setFormulario(inicialValues);
            }
        });
    };
    console.log(formulario);

    if (!items.length) return "No tienes arituculos en el carrito" 

    return (
        <>
            <Container>
                <Button onClick={reset}>Vaciar</Button>
            {items?.map((i) => {
                return (
                    <div key={i.id}>
                        <img src={i.imagen} alt={i.categoria} height={200} />
                        <h1>{i.titulo}</h1>
                        <h2>Precio: {i.precio}</h2>
                        <h3>Cantidad: {i.quantity}</h3>
                        <span onClick={() => removeItem(i.id)}>X</span>
                    </div>
                );
            })}
            </Container>
            <Container>
                <h4>Total: {totales}</h4>
                <hr />
                    <form>
                        <div>
                            <label>Nombre</label>
                            <input value={formulario.nombre} onChange={handleChange} name="nombre"/>
                        </div>
                        <div>
                            <label>Correo</label>
                            <input value={formulario.correo} onChange={handleChange} name="correo"/>
                        </div>
                        <div>
                            <label>Celular</label>
                            <input value={formulario.celular} onChange={handleChange} name="celular"/>
                        </div>
                        <Button onClick={handleOrder}>Comprar</Button>
                    </form>
            </Container>
        </>
    );
};