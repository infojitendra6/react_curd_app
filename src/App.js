import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MenuAppBar from './componant/MenuAppBar';
import MediaCard from './componant/MediaCard';
import Navbar from './componant/Navbar';
import Contact from './componant/Contact';
import About from './componant/About';
import {BrowserRouter as Router, Route, Switch ,withRouter} from 'react-router-dom'
import Home from './componant/Home';
import NotFound from './componant/NotFound';
import AddUser from './componant/AddUser';
import EditUser from './componant/EditUser';
import User from './componant/User';

function App() {
  return (

  // <div className="App">

  // {/* <MenuAppBar/> */}

  // {/* <MediaCard/> */}


  //   <Navbar/>
  //   <Contact/>
  //   <About/>
  // </div>

<Router>
      <div className="App">
        <Navbar />

        <Switch>
          
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/" component={Home}/>
          
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
         
        </Switch>
      </div>
    </Router>


  );
}

export default App;
