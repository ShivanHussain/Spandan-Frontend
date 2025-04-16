import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; 
import Events from './EventsPage';
import RegisterEvent from './RegisterEvent';
<<<<<<< HEAD
import ScrollToTop from './ScrollToTop'; // ✅ import the scroll helper
import Signup from './Signup';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authActions } from './auth';
import Footer from './ContactFooter';
import SoloEventDashboard from "./SoloEventDashboard";


function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
  if(
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("Pid")
    ){
      dispatch(authActions.login());
      
    }
  },[dispatch])
  return (
    <>
      <ScrollToTop/> {/* ✅ this ensures scroll resets on route change */}
=======
import ScrollToTop from './ScrollToTop'; // 
import SoloEventDashboard from "./SoloEventDashboard";

function App() {
  return (
    <>
      <ScrollToTop /> 
>>>>>>> a57215a51a8df0ac978bd190486e680c05c693cd
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register/:eventName" element={<RegisterEvent />} />
<<<<<<< HEAD
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/shikharshreyshivanraj/solo-events" element={<SoloEventDashboard />} />
      </Routes>
      <Footer/>
=======
        <Route path="/shikharshreyshivanraj/solo-events" element={<SoloEventDashboard />} />
      </Routes>
>>>>>>> a57215a51a8df0ac978bd190486e680c05c693cd
    </>
  );
}

export default App;
