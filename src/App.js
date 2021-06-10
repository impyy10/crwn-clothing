import "./styles.css";
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/pages/Homepage/homepage'
import ShopPage from './components/pages/shop/shop'
import Header from './components/header/header'

export default function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
      
     
    </div>
  );
}
