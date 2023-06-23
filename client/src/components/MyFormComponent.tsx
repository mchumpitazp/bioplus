import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button, Alert, FormFeedback, Spinner } from 'reactstrap';
import { baseUrl } from "../baseUrl";

interface MyFormProps {
    colClassName: string,
    setId: boolean,
    initProduct: string,
    buttonInner: string
}

function MyForm (props: MyFormProps) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [product, setProduct] = React.useState('');

    const [nameVal, setNameVal] = React.useState<Boolean>();
    const [emailVal, setEmailVal] = React.useState<Boolean>();
    const [productVal, setProductVal] = React.useState<Boolean>();

    const [success, setSuccess] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const [validation, setValidation] = React.useState(false);
    const [spinnerOpen, setSpinnerOpen] = React.useState(false);

    React.useEffect(() => {
        setProduct(props.initProduct);
    }, [props.initProduct]);

    React.useEffect(() => {
        if (validation) {
            handleValidSubmit();
            setValidation(false);
        }
        // eslint-disable-next-line
    }, [validation]); 

    React.useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (success) {
             timeout = setTimeout(() => { setSuccess(false); }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [success]);

    React.useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (failed) {
            timeout = setTimeout(() => { setFailed(false) }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [failed])

    const clearInputs = () => {
        setName('');
        setEmail('');
        setProduct('');
    };

    const handleValidSubmit = () => {
        const newOrder = {
            name: name,
            email: email,
            product: product
        };

        return fetch(baseUrl + '/orders', {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            setSpinnerOpen(false);

            if (response.status === 200) {
                clearInputs();
                setSuccess(true);
            } else {
                setFailed(true);
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                // error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .catch(error => {
            setSpinnerOpen(false);
            console.log('Error POST method: ', error.message);
        })
    };

    const validateForm = () => {
        let nameTmp = false;
        let emailTmp = false;
        let productTmp = false;

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (name.length > 0) {
            nameTmp = true;
            setNameVal(true);
        } else { setNameVal(false); }

        if (emailRegex.test(email)) {
            emailTmp = true;
            setEmailVal(true);
        } else { setEmailVal(false); }

        const productValue = (document.querySelector('.formProductInput') as HTMLInputElement).value;
        if (productValue !== '') {
            setProduct(productValue);
        }
        if (productValue.length || product.length > 0) {
            productTmp = true;
            setProductVal(true);
        } else { setProductVal(false); }

        return (nameTmp && emailTmp && productTmp);
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (validateForm()) {
            setSpinnerOpen(true);
            setValidation(true);
        } else {
            setValidation(false);
        }
    }

    return (
        <Form id={props.setId? "form" : ""} noValidate onSubmit={handleSubmit}>            
            <Row>
                <Col className={props.colClassName}>
                    <FormGroup>
                        <Label for="name-input">Your name *</Label>       
                        <Input id="name-input" type='text' required
                            value={name}
                            onChange={(e: React.MouseEvent<HTMLInputElement>) => setName((e.target as HTMLInputElement).value)}
                            onClick={() => setNameVal(true)}
                            invalid={nameVal===false}/>
                        <FormFeedback>
                            Please provide a name
                        </FormFeedback>
                    </FormGroup>
                </Col>
                <Col className={props.colClassName}>
                    <FormGroup>
                        <Label for="email-input">Email *</Label>       
                        <Input id="email-input" type='text' required
                            value={email}
                            onChange={(e: React.MouseEvent<HTMLInputElement>) => setEmail((e.target as HTMLInputElement).value)}
                            onClick={() => setEmailVal(true)}
                            invalid={emailVal===false}/>      
                            <FormFeedback>
                                Please provide a valid email
                            </FormFeedback>      
                    </FormGroup>
                </Col>
                <Col className={props.colClassName}>
                    <FormGroup>
                        <Label for="product-input">Name of Product *</Label>       
                        <Input id="product-input" className='formProductInput'
                            type='text' required
                            value={product}
                            onChange={(e: React.MouseEvent<HTMLInputElement>) => setProduct((e.target as HTMLInputElement).value)}
                            onClick={() => setProductVal(true)}
                            invalid={productVal===false}/>
                        <FormFeedback>
                            Please provide a product
                        </FormFeedback>
                    </FormGroup>
                </Col>
                <Col className="btn-form-container mb-2">
                    {
                        spinnerOpen &&
                        <div className='d-flex justify-content-center my-2'>
                            <Spinner type='grow' style={{backgroundColor: '#DD3450'}}>
                                Loading ...
                            </Spinner>
                        </div>
                    }

                    <Alert isOpen={success} className='my-3 py-2'>
                        <h6 className='text-center m-0' style={{fontSize: '0.75rem'}}>Thank you!</h6>
                    </Alert>

                    <Button className="btn-form" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}>
                        {props.buttonInner}
                    </Button>
                </Col>
                <Col className="form-required col-12">
                    <p><strong>* Required</strong></p>
                </Col>
            </Row>
        </Form>
    )
}

export default MyForm;