import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import {
    getFirestore,
    getDocs,
    where,
    query,
    collection
} from "firebase/firestore";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {

        const db = getFirestore();
        const refCollection = !id
            ? collection(db, "items")
            : query(collection(db,"items"),where("categoria","==", id));


        getDocs(refCollection)
            .then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()};
                    })
                );
            })
            .finally(() => setLoading(false));
        /*
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
        */
    },[id]);
    console.log(products)
    if (loading) return <Container className="mt-4">Cargando.... </Container>;
    if (products.length === 0) return <Container className="mt-4"> No se encontraron productos</Container>
    
    return (
        <>
            <Container className="d-flex flex-wrap justify-content-evenly" style={{ paddingTop: "3rem" }}>
                {products.map(product => (
                    <Card key={product.id} style={{ width: "18rem", margin: "0.5rem" }}>
                        <Card.Img variant="top" alt={product.categoria} src={product.imagen} height="400" />
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Title>Camisetas {product.categoria}</Card.Title>
                            <Card.Text>
                                {product.descripcion}
                            </Card.Text>
                            <Link to={`/item/${product.id}`}><Button variant="primary">Ver producto</Button></Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>

    );
}