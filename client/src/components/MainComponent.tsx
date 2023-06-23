import React from "react";

// Components
import Header from "./HeaderComponent";
import Headline from "./HeadlineComponent";
import About from "./AboutComponent";
import Products from "./ProductsComponent";
import Promo from "./PromoComponent";
import Scopes from "./ScopesComponent";
import Stages from "./StagesComponent";
import Form from "./FormComponent";
import Footer from "./FooterComponent";
import ModalOrder from "./ModalOrderComponent";

// Redux
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { fetchProducts } from '../redux/ActionCreators';
import { Spinner } from 'reactstrap';

function Main () {
    // Redux
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: { products: any; }) => state.products);

    // States
    const [isLoading, setLoading] = React.useState(true);
    const [modal, setModal] = React.useState(false);
    const [modalProduct, setModalProduct] = React.useState('');
    const toggleModal = () => setModal(!modal);

    React.useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    React.useEffect(() => {
        if (!products.isLoading) {
            products.products.forEach((p: { image: string; headline: any; }) => {
                const img = new Image();
                img.src = '/images' + p.image;

                if (!p.headline) {
                    const img2 = new Image();
                    img2.src = '/images' + p.image.replace('1.', '2.');
                }
            });
            setTimeout(() => setLoading(false), 1000);
        }        
    }, [products]);

    React.useEffect(() =>{
        if (!isLoading) {
            (document.querySelector('body') as HTMLElement).style.height = 'auto';
            (document.querySelector('html') as HTMLElement).style.overflowY = 'auto';
        }
    }, [isLoading]);

    if (isLoading) {
        return (
            <div id="spinner-container">
                <Spinner/>
            </div>
        )
    } else {
        return (
            <>
                <Header />
                <Headline 
                    products={products.products.filter((p: { headline: boolean; }) => p.headline)}
                    toggleModal={toggleModal} 
                    setModalProduct={setModalProduct} />
                <About />
                <Products 
                    products={products.products.filter((p: { headline: boolean; }) => !p.headline)}
                    toggleModal={toggleModal} 
                    setModalProduct={setModalProduct} />
                <Promo toggleModal={toggleModal} setModalProduct={setModalProduct} />
                <Scopes />
                <Stages />
                <Form />
                <Footer />
                <ModalOrder modal={modal} toggle={toggleModal} product={modalProduct} />
            </>
        )
    }
}

export default Main;