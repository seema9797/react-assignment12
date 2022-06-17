import {useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Moviesearch from'./components/Moviesearch'
import BookSeaat from'./components/BookSeaat';
import ConfirmBook from './components/ConfirmBook';

import Movie from'./Movie'

function App() {
 
  return (
  <div>
<Router>
      <Switch>
        <Route exact path="/ConfirmBook">
           <ConfirmBook />
        </Route>
       <Route exact path="/bookseat">
           <BookSeaat/>
        </Route>
        <Route exact path="/Moviesearch">
           <Moviesearch/>
        </Route>
       <Route exact path="/">
           <Movie/>
        </Route>
      </Switch>
    </Router>
  </div>

  );
}

export default App;
