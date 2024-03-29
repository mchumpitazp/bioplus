import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import $ from 'jquery';
import MyForm from './MyFormComponent';

interface RenderProductProps {
    product: any,
    toggleModal: () => void,
    setModalProduct: (product: string) => void
}

function RenderProduct (props: RenderProductProps) {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const productClicked = $(e.target).siblings('#headline-product-title').eq(0).text();
        props.setModalProduct(productClicked);
        props.toggleModal();
    }

    return (
        <Row className='align-items-center'>
            <Col sm className='col-sm-5'>
                <div className='img-container'> 
                    <img src={'/images' + props.product.image} alt={props.product.name}/>
                </div>
            </Col>

            <Col sm id='headline-text'>
                <h6 id='headline-product-title'>{props.product.title}</h6>

                <p id='headline-product-des'>{props.product.description}</p>

                <h4 className='mb-3'><strong id='headline-product-price'>€ {props.product.price}</strong> </h4>

                <Button className='d-none d-sm-block' onClick={handleClick}>
                    ORDER PRODUCT
                </Button>

                <Button className='d-block d-sm-none btn-sm' onClick={handleClick}>
                    ORDER PRODUCT
                </Button>
            </Col>
        </Row>
    );  
}

interface RenderButtonsProps {
    setIndex: (index: number) => void,
    products: any
}

const MemoizedRenderButtons = React.memo (

    function RenderButtons (props: RenderButtonsProps) {

        const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
            // Update index
            const newIndex = (e.target as HTMLElement).getAttribute('data-key');
            props.setIndex(parseInt(newIndex!));
    
            // Update classes
            $('.btn-hl').removeClass('active');
            $(e.target).children('.btn-hl').addClass('active');
        }
    
        return (
            <Row className='justify-content-center mt-3'>
                { props.products.map((_: any, index: number) => {
                    return (
                        <div key={index} data-key={index} className='headline-btns px-0 mx-2 my-1' onClick={handleClick}>
                            {                    
                                index === 0 ?
                                <i className='btn-hl bi bi-circle-fill active'></i>
                                :
                                <i className='btn-hl bi bi-circle-fill'></i>
                            }
                        </div>
                    );
                }) }
            </Row>
        );
    }
)

interface HeadlineProps {
    products: any,
    toggleModal: () => void,
    setModalProduct: (product: string) => void
}

function Headline (props: HeadlineProps) {
    const [index, setIndex] = React.useState(0);

    return (
        <section id='headline'>
            <Row className='m-0'>
                <Col className='col-md-7 p-0' id='headline-left'>
                    <div id='headline-content'>
                        <RenderProduct
                            product={props.products[index]}
                            toggleModal={props.toggleModal}
                            setModalProduct={props.setModalProduct} />
                        <MemoizedRenderButtons  
                            setIndex={setIndex}
                            products={props.products} />
                    </div>
                </Col>

                <Col className='col-md-5 p-0' id='headline-right'>
                    <div id='headline-bg'></div>
                    <div id='headline-form'>
                        <h5 className='mb-3'><strong>Submit your application</strong></h5>
                        <MyForm colClassName="col-12"
                                setId={false}
                                initProduct=''
                                buttonInner="CONTACT WITH ME!" />
                    </div>
                    
                </Col>
            </Row>
        </section>
    );  
}

export default Headline;