import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function CalorieCounter() {

    return (
        <>
        <div className='backgroundColor'>
            <form className='moduleContents formsBackground calorieCounter backgroundImages'>
            <h2 className='calorieCounterHeading'>Calorie Counter</h2>
            <hr />
                <Form.Group className="CalorieCounter mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter Your Age" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="CalorieCounter mb-3" controlId="formBasicPassword">
                    <Form.Label>Height</Form.Label>
                    <Form.Control type="number" placeholder="Enter your height" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="CalorieCounter mb-3" controlId="formBasicPassword">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control type="number" placeholder="Enter your Weight" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="CalorieCounter mb-3" controlId="formBasicPassword">
                    <Form.Label>Activity</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Select menu</option>
                        <option value="1">No Exercise</option>
                        <option value="2">Light: exercise 1-3 times/weeko</option>
                        <option value="3">Moderate: exercise 4-5 times/week</option>
                        <option value="4">Active: daily exercise or intense exercise 3-4 times/week Exercise</option>
                        <option value="5">Very Active: intense exercise 6-7 times/week</option>
                        <option value="6">Extra Active: very intense exercise daily, or physical jobe</option>

                    </Form.Select>
                </Form.Group>

 

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
            </div>
        </>
    );
}

export default CalorieCounter