import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SideMenu from './pages/nav/SideMenu';
import React from 'react';
import { useState } from 'react';
import Eventos from './pages/nav/components/eventos.tsx';
import MisDatos from './pages/nav/components/MisDatos';
import Reportes from './pages/Reportes/Reportes';

import './App.css';
import Login from './pages/Login/Login';


function App() {

  const [inactive, setInactive] = useState(false);

  return (
     <div className="App">
      
      <Router>
        <SideMenu onCollapse={(inactive)=>{
          console.log(inactive);
          setInactive(inactive);
        }}/>
        <div className={`container ${inactive ? 'inactive': ''}`}>
        <Switch>
          <Route exact path={'/eventos'}>
            <Eventos />
          </Route>
          <Route path={'/misdatos'}>
            <MisDatos />
          </Route>
          <Route path={'/Reportes'}>
            <Reportes />
            </Route>

        </Switch>
        </div>
      </Router>
     </div>
    
  );
}

export default App;