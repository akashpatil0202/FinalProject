import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBRadio } from 'mdb-react-ui-kit';

import { useState } from "react";

const Trainee=()=>{
    const[Inputs,setInputs]=useState({});

    const handleChange=(event)=>{
        let paramName=event.target.name;
        let paramValue=event.target.value;

        setInputs(
            values => ({...values,[paramName]:paramValue })
           );
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(JSON.stringify(Inputs));
    };

    return<>
    <div className='backgroundColor'>
    <form action="" className='moduleContents formsBackground traineeForm backgroundImages' onSubmit={handleSubmit}>
        <h1 className='moduleHeadings traineeHeading'>TraineeForm</h1>
        <hr/>
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name="name"  placeholder="Enter your Name" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" name="name"  placeholder="Enter your Name" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Re-Enter Password:</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" name="repassword" onChange={handleChange} />
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        
        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Age:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Age" name="age" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
   
       
      <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
      <Form.Label>Gender:</Form.Label>
      <MDBRadio name='gender' id='male' label='Male'  value="male"  onChange={handleChange} />
      <MDBRadio name='gender' id='female' label='Female'  value="female" onChange={handleChange}/>
      <MDBRadio name='gender' id='other' label='Other'  value="other" onChange={handleChange}/>
      </Form.Group>


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>PhoneNo:</Form.Label>
        <Form.Control type="number" placeholder="Enter your PhoneNo" name="phoneno" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Email-Id:</Form.Label>
        <Form.Control type="email" placeholder="Enter your Email-Id" name="emailid" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Adhar-No:</Form.Label>
        <Form.Control type="number" placeholder="Enter your Adhar-No" name="adharno" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 


        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>JoiningDate:</Form.Label>
        <Form.Control type="date" placeholder="select your joining date" name="joiningdate" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group>  

        <Form.Group className="TrainerForm mb-3" controlId="formBasicPassword">
        <Form.Label>Address:</Form.Label>
        <Form.Control type="text" placeholder="select your address" name="address" onChange={handleChange}/>
        <Form.Text className="text-muted"></Form.Text>
        </Form.Group> 


        <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
    </div>
    </>;


    
}
export default Trainee;