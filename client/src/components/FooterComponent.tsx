import { Col, Row } from "reactstrap";

function Footer () {
    return (
        <footer>
            <section id="footer-content" className="py-5">
                <Row>
                    <Col sm className="order-sm-2">
                        <h5 className="mb-2">CONTACT</h5>
                        <div className="d-flex flex-column justify-content-around">
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-geo me-2"></i>
                                <h6 className="m-0">#1801, A unit, 2nd Seongnam Ulim Lions Valley, Sagimakgol-ro 45beon-gil, Jungwon-gu, Seongnam-si Gyeonggi-do, Republic of Korea</h6>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-envelope me-2"></i>
                                <h6 className="m-0">info@bioplus-pharma.com</h6>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-telephone me-2"></i>
                                <h6 className="m-0">+82 (308) 64 01 10</h6>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-shield-check me-2"></i>
                                <a href="https://www.termsfeed.com/live/df0b14f0-ece8-47d0-ade1-9eb74dcb0a16" target="_blank" rel="noreferrer">
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-file-earmark-lock me-2"></i>
                                <a href="https://www.termsfeed.com/live/0a311242-9d59-4157-b70f-14b09b400ca4" target="_blank" rel="noreferrer">
                                    Terms and Conditions
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col id="footer-logo" className="order-sm-1">
                        <figure className="img-container">
                            <img src="/logo.png" alt="logo"/>
                        </figure>
                        
                        <p className="m-2 align-content-start">BioPlus © 2023 - All rights reserved.</p>
                    </Col>
                </Row>
            </section>
        </footer>
    )
}

export default Footer;