import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HealthDetails from './HealthDetails';
import WorkoutPlan from './WorkoutPlan';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentDetails from './PaymentDetails';
import home from './HomePage';
import HomePage from './HomePage';
import OwnerForm from './OwnerForm';
import Login from './Login';
import Trainee from './Trainee';
import TrainerForm from './TrainerForm';
import BMICalculator from './BMICalculator';
import CalorieCounter from './CalorieCounter';
import MembershipPlan from './MembershipPlan';
import HomeSubComponent from './HomeSubComponent';
function BasicExample() {
  return (
   <>
   {/* <MembershipPlan/> */}
   {/* <CalorieCounter/> */}
   {/* <PaymentDetails/> */}
   {/* <BMICalculator/> */}
   {/* <TrainerForm/> */}
   {/* <WorkoutPlan/> */}
   {/* <TrainerForm/>    --- Not in use*/}
   {/* <Trainee/> */}
    {/* <Login/>            */}
    {/* <OwnerForm/>      */}
    {/* <HealthDetails/> */}
   {/* <HomePage/> */}

   <div>
     <BrowserRouter>
       <Routes>
            <Route path='/' element={<><HomePage/><HomeSubComponent/></>}>  </Route>
            <Route path='/home' element={<><HomePage/><HomeSubComponent/></>}></Route>
            <Route path='/trainee' element={<><HomePage/><Trainee/></>}> </Route>
             <Route path='/trainer' element={<><HomePage/><TrainerForm/></>}></Route>
                <Route path='login' element={<Login/>}></Route>
                <Route path='/owner' element={<><HomePage/><OwnerForm/></>}></Route>
                <Route path='healthdetails' element={<HealthDetails/>}></Route>
                <Route path='workoutplan' element={<WorkoutPlan/>}></Route>
                <Route path='paymentdetails' element={<PaymentDetails/>}></Route>
            <Route path='bmicalculator' element={<><HomePage/><BMICalculator/></>}></Route>
                <Route path='caloriecounter' element={<><HomePage/><CalorieCounter/></>}></Route>
                <Route path='membershipplan' element={<><HomePage/><MembershipPlan/></>}></Route>   
       </Routes>
     </BrowserRouter>
    
    </div>
    </>

  );
}

export default BasicExample;