import { Modal, ModalHeader, ModalBody } from "reactstrap";
import MyForm from "./MyFormComponent";

interface ModalOrderProps {
    modal: boolean,
    toggle: () => void,
    product: string
}

function ModalOrder (props: ModalOrderProps) {
    return (
        <Modal isOpen={props.modal} toggle={props.toggle} centered>
            <ModalHeader toggle={props.toggle}>New product order</ModalHeader>
            <ModalBody>
                <MyForm colClassName="col-12"
                        setId={false}
                        initProduct={props.product}
                        buttonInner="ORDER PRODUCT"/>
            </ModalBody>
        </Modal>
    )
}

export default ModalOrder;