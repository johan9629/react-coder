import { useState, useEffect, useContext } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { ItemCount } from "./ItemQuantitySelector";
import { ItemsContext } from "../context/ItemsContext";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { addItem } = useContext(ItemsContext);

    const addCarrito = (count) => {
        addItem({...item , quantity: count});
    }

    useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db,"items", id);

    getDoc(refDoc)
        .then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() });
        })
        .finally(() => setLoading(false));
    },[id]);

    if (loading) return <Container className="mt-4">Cargando.... </Container>;
    if (!item.descripcion) return <Container className="mt-4"> No existe el producto</Container>
    
    return (
        <>
        <Container className="mt-04" style={{ padding: "3rem 0", width: "20rem"}}>
                <Card className="d-block" style={{ margin: "auto" }}>
                    <Card.Img variant="top" alt={item.categoria} src={item.imagen} height="600" />
                </Card>
                <Card.Title > Camisetas {item.categoria}</Card.Title>
                <Card.Text> {item.descripcion} </Card.Text>
                <ItemCount stock={item.stock} addCarrito={addCarrito}/>
        </Container>
    </>

    );
}