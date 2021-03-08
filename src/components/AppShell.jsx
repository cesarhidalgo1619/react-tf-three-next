import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Avatar from './pages/Avatar';

import Tabs from './pages/Tabs';
import Biblioteca from './pages/Biblioteca';
import Traductor from './pages/Traductor';
import Ponteaprueba from './pages/Ponteaprueba';
import Activate from './pages/Activate';
import Dona from './pages/Dona';
import Conoce from './pages/Conoce';
import Visor3d from "./pages/Visor3d";
import Game from "./pages/Game";

const AppShell = () => {
  return (

<Router>

      {/* <Route path="/tabs" render={() => <Tabs />} />  */}
      <Route exact path="/" render={() => <Redirect to="/tabs" />} />

      <Route path="/tabs/settings" component={Settings} exact={true} />

      <Route path="/tabs/profile" component={Profile} exact={true} />
        <Route path="/tabs/avatar" component={Avatar} exact={true} /> 
      
      <Route path="/tabs/dashboard" component={Dashboard} exact={true} />  
        <Route path="/tabs/biblioteca" component={Biblioteca} exact={true} />
        <Route path="/tabs/traductor" component={Traductor} exact={true} />
        <Route path="/tabs/ponteaprueba" component={Ponteaprueba} exact={true} />
        <Route path="/tabs/activate" component={Activate} exact={true} />
        <Route path="/tabs/dona" component={Dona} exact={true} />
        <Route path="/tabs/game" component={Game} exact={true} />
        <Route path="/tabs/conoce" component={Conoce} exact={true} />
        <Route path="/tabs/visor3d" component={Visor3d} exact={true} />

      <Route path="/tabs" render={() => <Redirect to="/tabs/dashboard" />} exact={true} /> 
</Router>
 
 
  );
};

export default AppShell;
