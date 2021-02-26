import React, { FunctionComponent } from 'react';
import Annuaire from './pages/Annuaire';
import UserDetails from './pages/details';
import profil from './pages/profil';
import avatar from './pages/avatar';
import techno from './pages/techno';
import formation from './pages/formation';
import forum from './pages/forum';
import Login from './pages/Login';
import forgot from './pages/forgot';
import redirect from './pages/redirect';
import postForum from './pages/postForum';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './css/styles.css';
import './css/reset.css';



const UserList: FunctionComponent = () => {

return (
<Router>
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Annuaire" component={Annuaire} />
      <Route path="/getUser/:_id" component={UserDetails} />
      <Route exact path="/profil" component={profil} />
      <Route exact path="/avatar" component={avatar} />
      <Route exact path="/techno" component={techno} />
      <Route exact path="/formation" component={formation} />
      <Route exact path="/forum" component={forum} />
      <Route exact path="/postForum" component={postForum} />
      <Route exact path="/forgot" component={forgot} />
      <Route exact path="/redirect" component={redirect} />
    </Switch>
  </div>
</Router>
)
}

export default UserList;