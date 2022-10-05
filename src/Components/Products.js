import { useEffect, useState } from "react";
import { getAllProducts } from "../Services/productsServices";
import Product from "./Product";
import { Row, Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function Products() {
  const [listofProducts, setListofProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await getAllProducts();
        setListofProducts(response);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    request();
  }, []);

  return (
    <div>
      <>
        <Carousel controls="false" fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Best Quality</h3>
              <p>We work with the world's top brands.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1482442120256-9c03866de390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Visit our Store</h3>
              <p>
                We have the best selection of gear for professional audio
                recording.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1489797715492-dbd3bd61c6b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Contact Us</h3>
              <p>We can help you make the perfect choice for you.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>

      <Row>
        {listofProducts.map((productOfList) => (
          <Product
            key={productOfList.id}
            name={productOfList.data().name}
            price={productOfList.data().price}
            id={productOfList.id}
            img={productOfList.data().img}
          />
        ))}
      </Row>
    </div>
  );
}
