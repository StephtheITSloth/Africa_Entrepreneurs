import React, {useState} from 'react';
import Modal from './ModalStyle'

const ModalSignIn = () => {
    const [click, setClick] = useState()
    const handleClick= ()=>{
        
        setClick(!click)
    }
    return (
			<Modal>
				<form onClic>
				<a href='#'>Close</a>
					<label htmlFor='signin'> Sign In</label>
					<input type='username' placeholder='username' required/>
					
					<input type='password' placeholder='password' required/>
					<button>Sign In</button>
				</form>
			</Modal>
		);
};

export default ModalSignIn;

// We need a button to open the modal
//sign in and sign up button