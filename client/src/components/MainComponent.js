import React from "react";

// Components
import Header from "./HeaderComponent";
import Header2 from "./Header2Component";
import Headline from "./HeadlineComponent";
import About from "./AboutComponent";
import Products from "./ProductsComponent";
import ModalOrder from "./ModalOrderComponent";

// Redux
import { connect } from 'react-redux';
import { fetchProducts } from '../redux/ActionCreators';
import { Spinner } from "reactstrap";

const mapStateToProps = state => {
    return { products: state.products }
}

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => {dispatch(fetchProducts())}
})

function Main ({ products, fetchProducts }) {
    const [isLoading, setLoading] = React.useState(true);
    const [modal, setModal] = React.useState(false);
    const [modalProduct, setModalProduct] = React.useState('');
    const toggleModal = () => setModal(!modal);

    React.useLayoutEffect(() => fetchProducts(), [fetchProducts]);

    React.useEffect(() => {
        if (!products.isLoading) {
            products.products.forEach(p => {
                const img = new Image();
                img.src = '/images' + p.image;

                if (!p.headline) {
                    const img2 = new Image();
                    img2.src = '/images' + p.image.replace('1.', '2.');
                }
            });
            setTimeout(() => setLoading(false), 1000);
        }        
    }, [products.isLoading]);

    React.useEffect(() =>{
        if (!isLoading) {
            document.querySelector('body').style.height = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
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
            <React.Fragment>
                <Header2 />
                <Headline 
                    products={products.products.filter(p => p.headline)}
                    toggleModal={toggleModal} 
                    setModalProduct={setModalProduct} />
                <About />
                <Products 
                    products={products.products.filter(p => !p.headline)}
                    toggleModal={toggleModal} 
                    setModalProduct={setModalProduct} />
                <ModalOrder modal={modal} toggle={toggleModal} product={modalProduct} />
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);