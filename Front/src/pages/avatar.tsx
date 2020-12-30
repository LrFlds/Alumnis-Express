import React, { Component, useState, useEffect } from 'react';
import User from '../models/user';
import {Link} from 'react-router-dom';
import UserProfil from '../components/profil';
import NavProf from '../js/props/navProfFunction';
import file from '../js/picture';
import back from '../js/back'



class App extends Component {


componentDidMount(){
    file()
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
    console.log(res.status)
    if(res.status == 201){
        window.location.href= '/user/avatar'
    }

});
}
render(){


  return (
  <div>
     <NavProf />

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
                                <h2>Avatar</h2>
                                <div className="contener-picture">
                                    <div className="contener-image">
                                    <img id="photo" src="http://via.placeholder.com/150" />
                                    </div>
                                    <form encType="multipart/form-data" action="#">
                                    <div className="file-field input-field">
                                    <div className="btn">
                                        <span id="up">parcourir ...</span>
                                        <input name="image" id="file"  type="file" onChange={this.fileSelectedHandler}></input>
                                    </div>
                                    <div className="file-path-wrapper">
                                        <input className="file-path validate" type="text" placeholder="aucun fichier sélectionné"></input>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 end">
                                <button type="submit" id="save" onClick={this.fileUploadHandler}  className="btn-val">Enregistrer les modifications</button>
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