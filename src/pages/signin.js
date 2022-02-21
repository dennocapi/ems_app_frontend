import { useState } from 'react'
import { loginUser } from '../api/apis';
import { userStore } from '../store/stores';

function SignIn() {
    const storeUser = userStore(state => state.storeUser)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!email) {
            alert('Please input email')
            return
        }

        loginUser({ email: email, password: password }).then((response) => {
            if (response && response.status === 200) {
                storeUser(response.data.user)
                window.location.href = "/"
                return false;
            } else if (response) {
                console.log(response)
            }
        })
        setEmail('')
        setPassword('')
    }

    return (
        <div className='signInContainer'>
            
            <h3>Sign In</h3>

            <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Email</label>
                <input type='email' placeholder='Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type='password' placeholder='Password' 
                value={password}  
                onChange={(e) => setPassword(e.target.value)} 
                />
            </div>

            <input type='submit' value='Sign In' className='btn btn-block' />
        </form>
        </div>
    )
}


export default SignIn;