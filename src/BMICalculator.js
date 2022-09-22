import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Item from './Item';
const backgroundPicture = new URL("./Images/background1.jpg",import.meta.url)
function BMICalculator() {

    return (
        <> 
        <div className='backgroundColor'>
            <form className='moduleContents formsBackground bMICalculator backgroundImages'>
            <h2 className='bMICalculatorHeading'>BMI Calculator</h2>
            {/* <hr />   */}
                <Form.Group className=" mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Your Age" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className=" mb-3" controlId="formBasicPassword">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" placeholder="Enter your height" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className=" mb-3" controlId="formBasicPassword">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number" placeholder="Enter your Weight" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            </div>
        </>
    );
}

export default BMICalculator