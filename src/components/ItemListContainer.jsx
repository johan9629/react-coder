import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import data from "../data/productos.js";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        new Promise((res,rej) => {
            setTimeout(() => res(data), 2000)
        })
        .then(response => {
            if(!id){
                setProducts(response)
            } else {
                const filtro = response.filter( items => items.categoria === id);
                setProducts(filtro);
            }
            
        })
        .finally(()=> setLoading(false));
    },[id]);
    console.log(products)
    if (loading) return <Container className="mt-4">Cargando.... </Container>;
    if (products.length === 0) return <Container className="mt-4"> No se encontraron productos</Container>
    
    return (
        <>
            <Container className="d-flex flex-wrap justify-content-evenly" style={{ paddingTop: "3rem" }}>
                {products.map(product => (
                    <Card key={product.id} style={{ width: "18rem", margin: "0.5rem" }}>
                        <Card.Img variant="top" alt={product.nombre} src={product.img} height="400" />
                        <Card.Body>
                            <Card.Title>{product.nombre}</Card.Title>
                            <Card.Text>
                                Camisetas marca {product.nombre} de la mejor calidad en ceda fría
                            </Card.Text>
                            <Link to={`/item/${product.id}`}><Button variant="primary">Ver producto</Button></Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>

    );
}