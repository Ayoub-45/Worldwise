import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing"
export default function App() {
    return <BrowserRouter>
    <Routes>
      <Route path="product" element={<Product/>}/>
      <Route path="pricing" element={<Pricing/>}/>
    </Routes>
    </BrowserRouter>
}
