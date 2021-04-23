import React, {useState} from 'react';
import Modal from './ModalStyle';


const ModalSignUp = () => {
            const [click, setClick] = useState()

    const handleClick= ()=>{
        setClick(!click)

    }
    return (
			<Modal>
				<form onClick='handleClick'>
					<a href='#'>Close</a>
					<label htmlFor='signup'>Sign Up</label>
					<input type='username' required />
					<input type='password' placeholder='Password' required />
					<input type='email' placeholder='email' required />
					<button>Sign Up</button>
				</form>
			</Modal>
		);
};

export default ModalSignUp;