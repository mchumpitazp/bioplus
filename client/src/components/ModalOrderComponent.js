import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import MyForm from "./FormComponent";

function ModalOrder ({ modal, toggle, product }) {
    return (
        <Modal isOpen={modal} toggle={toggle} centered>
            <ModalHeader toggle={toggle}>New product order</ModalHeader>
            <ModalBody>
                <MyForm colClassName="col-12" initProduct={product} buttonInner="ORDER PRODUCT"/>
            </ModalBody>
        </Modal>
    )
}

export default ModalOrder;