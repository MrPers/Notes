import React, { FC, ReactElement} from 'react';
import { isAuthenticated, signinRedirect, signoutRedirect } from '../../auth/user-service';
import './Header.css';

const Header: FC<{}> = (): ReactElement => {
    return (  
        <div className='up-section'>
        {!isAuthenticated() ?
          <button className='up-button' onClick={() => signinRedirect()}>Login</button> :
          <button className='up-button' onClick={() => signoutRedirect()}>Logout</button>
        }
      </div>
    );
};

export default Header;