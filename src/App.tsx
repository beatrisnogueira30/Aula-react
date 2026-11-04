import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Home from "./assets/pages/home/Home";
import ListaProdutos from "./assets/pages/listaProdutos/ListaProdutos";


export default function App(){
    return(
          <>
        <Header/>
        <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/podutos" element={<ListaProdutos/>}/>
        </Routes>
        <Footer />
    </>

    )
}