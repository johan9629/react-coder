import { useState, useEffect } from "react";

import data from "../data/productos.js";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        new Promise((res,rej) => {
            setTimeout(() => res(data), 2000)
        })
        .then(response => {
                const item = response.find( items => items.id === Number(id));
                setProduct(item);
        })
        .finally(()=> setLoading(false));
    },[id]);
    if (loading) return <Container className="mt-4">Cargando.... </Container>;
    
    return (
        <>
        <Container className="mt-04" style={{ paddingTop: "3rem" }}>
                <Card className="d-block" style={{ width: "20rem", margin: "0.5rem" }}>
                    <Card.Img variant="top" alt={product.nombre} src={product.img} height="600" />
                    <Card.Body>
                        
                    </Card.Body>
                </Card>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Text>
                            Camisetas marca {product.nombre} de la mejor calidad en ceda fría
                </Card.Text>
        </Container>
    </>

    );
}