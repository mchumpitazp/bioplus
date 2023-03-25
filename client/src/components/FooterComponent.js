import React from "react";
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
                                <h6 className="m-0">sales@bioplus.com</h6>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-telephone me-2"></i>
                                <h6 className="m-0">+82 (308) 64 01 10</h6>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-shield-check me-2"></i>
                                <a href="https://www.termsfeed.com/live/325f4e18-a6f9-4e57-8243-a6fe4ad44cd4" target="_blank" rel="noreferrer">
                                    Privacy Policy
                                </a>
                            </div>
                            <div className="d-flex align-items-center my-1">
                                <i className="bi-file-earmark-lock me-2"></i>
                                <a href="https://www.termsfeed.com/live/306656cb-454e-48f1-a454-5d2dd4dc0524" target="_blank" rel="noreferrer">
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