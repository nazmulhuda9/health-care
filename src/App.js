
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header/Header';


import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';
import LogIn from './components/LogIn/LogIn/LogIn';
import Details from './components/Details/Details';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import Appointment from './components/Appointment/Appointment';




function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
