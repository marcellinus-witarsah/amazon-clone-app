import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider/StateProvider';
import Footer from './Components/Footer/Footer';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Components/Orders/Orders';

const promise = loadStripe('pk_test_51JI7WYLfaz2lteNoN9Dcs3E9lQXJy9djkcDGIG06YNSQ6Z4WzThJNOsHtmU5Nt2yGE2yhFgnCJ46v2yHdny3uSaz00dLHePI7e')

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if (authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })


  }, []) // empty brackets means tha it will only run once
  //if theres basket or user, than the web is going to be run if that object changes
  return (
    <Router> 
      <div className="App">
        <Switch> 
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
