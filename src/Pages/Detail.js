import { useParams } from "react-router-dom";
import { getByIdProducts } from "../Services/productsServices";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await getByIdProducts(id);
        setProduct(response.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    request();
  }, [id]);

  if (loading) {
    return <Spinner animation="grow" variant="secondary"/>;
  } else {
    return (
      <div>
      <div style={{
        width: 400, height: 400, display: "inline-flex"}}>
                <img src={product.code} alt="large" style={{maxHeight: "400"}}></img>

      </div>
        <h4>${product.price}</h4>

        <h5>{product.name}</h5>
        <p>Description:</p>
        <p> {product.description}</p>
        <p>ID: {product._id}</p>

        <Button
          type="submit"
          variant="warning"
          onClick={() => navigate("/buy/" + id)}
        >
          Buy
        </Button>
      </div>
    );
  }
}
