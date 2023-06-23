import MyForm from "./MyFormComponent";

function Form () {
    return (
        <section id="form-section">
            <div id="form-container">
                <h5 className="mb-3"><strong>Submit your application</strong></h5>
                <MyForm colClassName="col-12 col-sm-3"
                        setId={true}
                        initProduct=""
                        buttonInner="CONTACT WITH ME!"/>
            </div>
        </section>
    )
}

export default Form;