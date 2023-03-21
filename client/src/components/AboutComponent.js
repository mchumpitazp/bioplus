import React from "react";
import { Row, Col } from 'reactstrap';

function About () {
    return (
        <section id="about">
            <Row>
                <Col md className="col-md-4 p-0" id="about-left">
                    <div id="about-bg"></div>
                    {/* <div className="bg-front"></div> */}
                </Col>
                <Col md className="col-md-8" id="about-right">
                    <div className="my-5" id="about-content">
                        <h4><strong>About "BioPlus Co., Ltd"</strong></h4>
                        <h5><strong>BioPlus Co., Ltd. is a developer of bio products with the purpose of popularizing the pursuit of beauty, playing an important role in national health and with key values to provide customer satisfaction and to deliver human management.</strong></h5>
                        <p>Sharing is also one of our values, and as a global company we share beauty to our clients, share the values with the public, share the profits to our employees, share the vision to the young, and share the beauty with the world through exports.
                            <br/><br/> Our company will continuously work hard to increase the quality standard of beauty and we commit to truly become a social business that practices the beauty of sharing.
                            <br/><br/> Thank you.</p>
                    </div>
                </Col>
            </Row>
        </section>
    )
}

export default About;