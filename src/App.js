import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Moviesearch from'./components/Moviesearch'
import BookSeaat from'./components/BookSeaat';
import ConfirmBook from './components/ConfirmBook';

import Movie from'./Movie'


import {GlobalProvider} from './context/GlobalState'
function App() {
 
  return (
  <GlobalProvider>
<Router>
      <Switch>
        <Route  path="/ConfirmBook">
           <ConfirmBook />
        </Route>
       <Route  path="/bookseat">
           <BookSeaat/>
        </Route>
        <Route  path="/Moviesearch">
           <Moviesearch/>
        </Route>
       <Route exact path="/">
           <Movie/>
        </Route>
      </Switch>
    </Router>
  </GlobalProvider>

  );
}

export default App;
