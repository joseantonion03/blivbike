import Hero from "./components/index/Hero";
import Header from "./components/index/Header";
import ProdutoComfort from "./components/index/ProdutoComfort";
import ProdutoCross from "./components/index/ProdutoCross";
import Alugar from "./components/index/Alugar";
import Vantagens from "./components/index/Vantagens";
import Escolha from "./components/index/Escolha";
import Blog from "./components/index/Blog";
import Especificacoes from "./components/index/Especificacoes";
import Faq from "./components/index/Faq";
import Localizacao from "./components/index/Localizacao";
import Footer from "./components/index/Footer";

const Home = () => {

    return (
        <>
            <Header />
            <Hero />
            <ProdutoComfort />
            <ProdutoCross />
            <Alugar />
            <Vantagens />
            <Escolha />
            <Blog />
            <Especificacoes />
            <Faq />
            <Localizacao />
            <Footer/>
        </>
    );
};

export default Home;