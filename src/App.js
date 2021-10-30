import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Authprovider from './Contexts/Authprovider';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Home/Services/Services';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Myorders from './Pages/Login/MyOrders/Myorders';
import ManageAllorders from './Pages/Login/ManageAllorders/ManageAllorders';
import AddNewService from './Pages/Login/AddNewService/AddNewService';
import PrivateRoute from './Pages/Login/PrivateRoute/privateRoute';
import Booking from './Pages/Booking/Booking';

function App() {
  return (
    <div className="App">
        
       <Authprovider>
       <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
               <Services></Services>           
             </Route>
             <PrivateRoute path="/details/:serviceId">
                <Booking></Booking>
             </PrivateRoute>
             <Route path="/contact">
              <Contact></Contact>       
             </Route>
             <Route path="/login">
               <Login></Login>          
             </Route>
             <Route path="/myorders">
               <Myorders></Myorders>         
             </Route>
             <Route path="/manageorders">
               <ManageAllorders></ManageAllorders>         
             </Route>
             <Route path="/addnewservice">
               <AddNewService></AddNewService>         
             </Route>
             <Route path="*">
              <NotFound></NotFound>          
             </Route>
          </Switch>
        </Router>
        <Footer></Footer>
       </Authprovider>
    </div>
  );
}

export default App;
