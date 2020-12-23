import React, { FunctionComponent, useState, useEffect } from 'react';
import User from '../models/user';
import {Link} from 'react-router-dom';
import img from '../imgs/redirect-illu.png';
import pierre from '../imgs/pierre.png';
import pierredeux from '../imgs/pierre2.png';
import pierretrois from '../imgs/pierre3.png';

import Nuage from '../imgs/Nuage.png';



const UserList: FunctionComponent = () => {
const [users, setUser] = useState<User[]>([]);

  useEffect(() => {

  }, []);

  return (
  <div>
      

<div className="redirect">
<img className='nuage1'  src={Nuage} />
<img className='nuage2'  src={Nuage} />
<img className='nuage3'  src={Nuage} />
<img className='nuage4'  src={Nuage} />

<img className='pierre5'  src={pierredeux} />
<img className='pierre3'  src={pierretrois} />
<img className='pierre2'  src={pierredeux} />
<img className='pierre1'  src={pierre} />
    <img  src={img} />
    <p>Hop Hop Hop t'as pas le droit d'être là !</p>
    <Link to="/user/login"  className=" redirectBtn" type="submit">Va t'en chez vous ! </Link>
    
    </div>

</div>

  );
  }

  export default UserList;