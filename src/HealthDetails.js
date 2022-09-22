import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function HealthDetails() {
  return (
    <>

    <div className='backgroundColor'>
    <Form className='moduleContents formsBackground healthDetails backgroundImages' > 
    <h1 className='moduleHeadings healthDetailsHeading'>Health Details</h1>
    <hr/>
        <Form.Group className="HealthDetails mb-3" controlId="">
        <Form.Label>Height</Form.Label>
        <Form.Control type="text" placeholder="Enter your height" />
        <Form.Text className="text-muted"> 
        </Form.Text>

        </Form.Group>
      <Form.Group className="HealthDetails mb-3" controlId="">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="text" placeholder="Enter your weight" />
      </Form.Group>

     
      <Form.Group className="HealthDetails mb-3" controlId="">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control type="text" placeholder="Enter your Date of Birth" />
      </Form.Group>

      <Form.Group className="HealthDetails mb-3" controlId="">
        <Form.Label>Blood Group</Form.Label>
        <Form.Control type="text" placeholder="Enter your Blood group"  />
      </Form.Group>

      <Form.Group className="HealthDetails mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Confirm" />
      </Form.Group>
      <Button className='button' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );
}

export default HealthDetails;