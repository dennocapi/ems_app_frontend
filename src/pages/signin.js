import { useState } from 'react'
import { loginUser } from '../api/apis';
import { userStore } from '../store/stores';

function SignIn() {
    const storeUser = userStore(state => state.storeUser)
    const user = userStore(state => state.user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        loginUser({ email: email, password: password }).then((response) => {
            if (response && response.status === 200) {
                storeUser(response.data.user)
                console.log('------User1-----------', user)
                window.location.href = "/"
                console.log('------User2-----------', user)
            } else if (response) {
                storeUser(null)
                setMessage(response.data.message)
            }
        }).catch(error => alert('An error occured.'))
    }
    console.log('------User3-----------', user)
    

    return (
        <div className='signInContainer'>
            <h3>Sign In</h3>
            {message && <p className='error'>{message}</p>}
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

            <input type='submit' value='Sign In' className='btn btn-primary btn-block' />
        </form>
        </div>
    )
}


export default SignIn;