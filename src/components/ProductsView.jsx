import { useEffect } from "react";
import { getProducts } from "../services/productsServices";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/slices/productsSlice";
import { addToCart } from "../redux/slices/shoppingCartSlice";

export default function ProductsView() {
  const { products } = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();

  const handleClickCard = (prod) => {
    dispatch(addToCart(prod))
  }

  useEffect(() => {
    getProducts()
      .then((products) => {
        dispatch(setProducts(products));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((prod, i) => (
          <div className="col-3" key={i}>
            <div className="card mb-3">
              <img className="card-img-top" src={prod.imagen} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">{prod.descripcion}</p>
                <button className="btn btn-dark" onClick={() => {handleClickCard(prod)}}>
                  Agregar a Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
