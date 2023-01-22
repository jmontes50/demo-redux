import { useSelector } from "react-redux";

export default function MyNav() {

  const { cartItems } = useSelector(state => state.shoppingCart)
  console.log(cartItems)
  return (
    <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container">
        <span className="navbar-brand mb-0 h1 text-white me-auto">Navbar</span>
        <span className="text-white h5">Items: {cartItems.length}</span>
      </div>
    </nav>
  );
}
