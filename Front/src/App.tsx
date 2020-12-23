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
      <Route exact path="/user/login" component={Login} />
      <Route exact path="/user/Annuaire" component={Annuaire} />
      <Route path="/user/getUser/:_id" component={UserDetails} />
      <Route exact path="/user/profil" component={profil} />
      <Route exact path="/user/avatar" component={avatar} />
      <Route exact path="/user/techno" component={techno} />
      <Route exact path="/user/formation" component={formation} />
      <Route exact path="/user/forum" component={forum} />
      <Route exact path="/user/postForum" component={postForum} />
      <Route exact path="/user/forgot" component={forgot} />
      <Route exact path="/user/redirect" component={redirect} />
    </Switch>
  </div>
</Router>
)
}

export default UserList;