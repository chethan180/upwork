import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
// import Home from './HodComponents/Home';
import ResponsiveAppBar from './Components/navbar';
// import Forms from './Components/Form' 
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <main>
        {/* <Head/> */}
        {/* <Navbar/> */}
        <ResponsiveAppBar/>
        <Switch>
          {/* <Route path = "/auth" exact component = {SignUp}/> */}

          <Route path = "/" exact component = {Home}/>
          <Route path = "/display" exact component = {Home}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
