import './App.css';
import { useGlobalContext } from './context';
import Modal from './Modal';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import FormPage from './FormPage';

function App() {
  const {modalContent} = useGlobalContext()

  return (
    <Router>

      <h1>TO DO APP</h1>

      <Switch>

          <Route path='/' exact>
            <Home/>
          </Route>

          <Route path='/add-task'>
            <FormPage/>
          </Route>

          <Route path='/edit-task/:id'>
            <FormPage/>
          </Route>

      </Switch>
      
    {modalContent && <Modal/>}

    </Router>

  );
}

export default App;
