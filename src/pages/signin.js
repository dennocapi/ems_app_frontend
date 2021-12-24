import { useState } from 'react'

function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!email) {
            alert('Please input email')
            return
        }

        // onAdd({ text, date, reminder })

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