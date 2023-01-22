import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import ProductsView from "./components/ProductsView";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<ProductsView />} />
      </Routes>
    </Router>
  );
}
