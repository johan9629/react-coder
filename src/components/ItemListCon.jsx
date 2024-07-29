import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import data from "../data/productos.js";
import { Container } from "react-bootstrap";

export const ItemListCon = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        new Promise((res,rej) => {
            setTimeout(() => res(data), 4000)
        })
        .then(response=>setProducts(response));
    },[]);
    console.log(products)
    return (
        <>
        {console.log(products)}
            <Container className="d-flex flex-wrap justify-content-evenly" style={{ paddingTop: "3rem" }}>
                {products.map(product => (
                    <Card style={{ width: "18rem", margin: "0.5rem" }}>
                        <Card.Img variant="top" alt={product.nombre} src={product.img} height="400" />
                        <Card.Body>
                            <Card.Title>{product.nombre}</Card.Title>
                            <Card.Text>
                                Camisetas marca {product.nombre} de la mejor calidad en ceda fría
                            </Card.Text>
                            <Button variant="primary">Ver producto</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>

    );
}