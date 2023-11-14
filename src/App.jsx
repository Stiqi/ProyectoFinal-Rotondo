import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./Components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartComponentContext from "./Context/cartContext";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <CartComponentContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/store" element={<ItemListContainer />} />
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartComponentContext>
  );
}

export default App;
