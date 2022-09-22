
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Trainee from "./Component/Trainee";
import TrainerForm from "./Component/TrainerForm";
import Login from "./Component/Login";
function App() {



  return (
    <div>
     <BrowserRouter>
     
       <Routes>
            <Route path='/' element={<Home/>}> 
                <Route path='trainee' element={<Trainee/>}></Route>
                <Route path='trainer' element={<TrainerForm/>}></Route>
                <Route path='login' element={<Login/>}></Route>
            </Route>
       </Routes>
     
     
     </BrowserRouter>



    </div>
  );
}

export default App;
