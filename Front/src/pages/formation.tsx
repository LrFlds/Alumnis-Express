import React, { Component, useState, useEffect } from 'react';
import User from '../models/user';
import {Link} from 'react-router-dom';
import UserProfil from '../components/profil';
import Nav from '../js/props/navFunction';

import back from '../js/functions/back'



class App extends Component {


componentDidMount(){

}
state={
    selectedFile: null
}
fileSelectedHandler = (event: any) => {

return this.setState({
  selectedFile: event.target.files[0]

})
}
fileUploadHandler = () => {
const fd = new FormData();
fd.append('image', this.state.selectedFile!);
fetch("http://api.app.localhost:3001/user/settingUser/",{
method: "POST",
body: fd,
credentials:'include',
headers: {
  Cookie: document.cookie,
}
})
.then(res =>{

    if(res.status == 201){
        window.location.href= '/avatar'
    }

});
}
render(){


  return (
  <div>
     <Nav />

    <div id="test2" className="contener-global">
      <div className="contener-main">
      <div className="row contener-nav">
          <div className="col  end">
          <button onClick={back} className="ret"> <i className="small material-icons">arrow_back</i> retour</button>
</div>
<div className="col s3 end">
      <a href="#!" className="notif"><i className="small material-icons">notifications_none</i></a>
</div>
      </div>
      <div className="contener-carte">
                        <div className="row">
                            <div className="avatar">
                                <h2>Formation</h2>
                                <div className="contener-picture">
                                    <form encType="multipart/form-data" action="#">
                                    <div className="file-field input-field">
                                    <div className="file-path-wrapper">
                                        <input type="text" placeholder="Ajouter votre Formation"></input>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col s12 end">
                  <a href="#!" className="btn-val">Enregistrer les modifications</a>
                </div>
                        </div>
                    </div>
      </div>
    </div>
  </div>
  );
  }
}
  export default App;