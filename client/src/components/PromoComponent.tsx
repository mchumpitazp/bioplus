import { Col, Row, Button } from "reactstrap";
import Counterdown from "./CounterdownComponent";

interface PromoProps {
    toggleModal: () => void,
    setModalProduct: (product: string) => void
}

function Promo (props: PromoProps) {
    const handleClick = () => {
        props.toggleModal();
        props.setModalProduct('');
    }

    return (
        <section id="promo">
            <Row>
                <Col md id="promo-advantages" className="order-2 order-md-1">
                    <div id="advantages">
                        <h4 className="pb-2"><strong>Company advantages</strong></h4>
                        <div className="advantage">
                            <i className="bi-hand-thumbs-up me-3"></i>
                            <div className="advantage-text">
                                <h6><strong>PROVE EFFECTIVENESS</strong></h6>
                                <p>All components have scientifically proven effectiveness</p>
                            </div>
                        </div>
                        <div className="advantage">
                            <i className="bi-check2-circle me-3"></i>
                            <div className="advantage-text">
                                <h6><strong>ACTIVE COMPONENTS</strong></h6>
                                <p>High concentration of active components</p>
                            </div>
                        </div>
                        <div className="advantage">
                            <i className="bi-bounding-box me-3"></i>
                            <div className="advantage-text">
                                <h6><strong>MULTIFUNCTIONALITY</strong></h6>
                                <p>One institute product instead of four mass market products</p>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col md id="promo-counterdown" className="order-1 order-md-2">
                    <div id="counterdown">
                        <h5><strong>Get 25% off on your first order</strong></h5>
                        <p>Contact us for a discount. Promotion time is limited!</p>
                        <Button onClick={handleClick}>
                            ORDER A PRODUCT
                        </Button>
                        <h5 className="mt-3">TIME LEFT</h5>
                        <Counterdown />
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default Promo;