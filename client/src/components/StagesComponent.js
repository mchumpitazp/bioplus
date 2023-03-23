import React from "react";
import { Col, Row } from "reactstrap";

function Stages () {
    return (
        <section id="stages">
            <Row xs="1" sm="4" id="stages-content">
                <Col className="stage">
                    <Row xs="2" sm="1">
                        <Col xs="3" sm="12" className="stage-number">
                            <span>1</span>
                        </Col>
                        <Col xs="9" sm="12" className="stage-text">You apply for a product on our website</Col>
                    </Row>
                </Col>
                <Col className="stage">
                    <Row>
                        <Col xs="3" sm="12" className="stage-number">
                            <span>2</span>
                        </Col>
                        <Col xs="9" sm="12" className="stage-text">We will contact you to confirm your order and check availability</Col>
                    </Row>
                </Col>
                <Col className="stage">
                    <Row>
                        <Col xs="3" sm="12" className="stage-number">
                            <span>3</span>
                        </Col>
                        <Col xs="8" sm="12" className="stage-text">You pay for the order in any way convenient for you</Col>
                    </Row>
                </Col>
                <Col className="stage">
                    <Row>
                        <Col xs="3" sm="12" className="stage-number">
                            <span>4</span>
                        </Col>
                        <Col xs="8" sm="12" className="stage-text">The collected order is sent to anywhere in the world</Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default Stages;