import { Route, Routes } from "react-router-dom";
import Footer from './components/footer/footer'
import Header from "./components/header/Header";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import Home from "./pages/home/Home";
import DetProduto from "./pages/detProdutos/Detproduto";
import Login from "./pages/Login/Login";
import AdmProdutos from "./pages/admProdutos/AdmProdutos";


export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<ListaProdutos />} />
                <Route path="/detalheProdutos" element={<DetProduto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/AdmProdutos" element={<AdmProdutos />} />
                <Route path="*" 
                element={<img className="container-notfound" src="https://cdn-icons-gif.flaticon.com/14447/14447763.gif" alt="imagem de não encontrado" />}/>

            </Routes>
            <Footer />
        </>

    )
}