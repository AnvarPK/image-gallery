import React from 'react';
import './scss/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import BookView from './pages/Book/View'
import BookEdit from './pages/Book/Edit'
import BookNew from './pages/Book/New'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Navbar from './components/Navbar.js'


function App() {
  return (
    <Router >
      {/* Header starts here */}
      <Header />
      {/* Header ends here */}

      {/* Main content starts here */}
      <div className="container">
        <div className="row ">
          <div className="page-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/books/edit/:id" component={BookEdit} />
              <Route path="/books/new" component={BookNew} />
              <Route path="/books/:id" component={BookView} />

              <NotFound />
            </Switch>
          </div>
        </div>
      </div>
      {/* Main content ends here */}

    </Router>
  );
}

export default App;
