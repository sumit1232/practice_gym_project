import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Trainers from './components/Trainers';
import Members from './components/Members';
import Dashboard from './components/Dashboard';
import Plan from './components/Plan';
import Payment from './components/Payment';
import Report from './components/Report';
import Enquiry from './components/Enquiry';

const App = () => {
  return (
 <>

<Router>
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/enquiry' element={<Enquiry />} />
    <Route path='/member' element={<Members />} />
    <Route path='/trainer' element={<Trainers />} />
    <Route path='/plans' element={<Plan/>} />
    <Route path='/payments' element={<Payment/>} />
    <Route path='/reports' element={<Report/>} />
  </Routes>
</Router>

 </>
  )
}

export default App ;
