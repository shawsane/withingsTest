import logo from './logo.svg';
import Header from './Header';
import Main from './Main';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <Route exact path ={"/"}> <Main /> </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
