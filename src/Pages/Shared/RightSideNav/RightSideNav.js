import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub} from "react-icons/fa"
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarosel from '../BrandCarosel/BrandCarosel';
import {AuthContext} from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{

        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))

    }


    return (
        <div>
            <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>

      
    </ButtonGroup>

    <div>
        <h5>Find us on</h5>
        <ListGroup>
      <ListGroup.Item className='mb-2'>Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Whatsapp</ListGroup.Item>
    
    </ListGroup>
    </div>
    <div>
        <BrandCarosel></BrandCarosel>
    </div>
        </div>
    );
};

export default RightSideNav;