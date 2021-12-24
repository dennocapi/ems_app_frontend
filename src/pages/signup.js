import { useState } from 'react'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [companyName, setCompanyName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!email) {
            alert('Please input email')
            return
        }

        // onAdd({ text, date, reminder })

        setEmail('')
        setLocation('')
        setPassword('')
        setConfirmPassword('')
        setCompanyName('')
    }

    return (
        <div className='signUpContainer'>
            
            <h3>Sign Up and get started</h3>

            <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'>
                <label>Email</label>
                <input type='email' placeholder='Enter Company Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                />
            </div>

            <div className='form-control'>
                <label>Company Name</label>
                <input type='text' placeholder='CompanyInstitution/Building Name' 
                value={companyName}  
                onChange={(e) => setCompanyName(e.target.value)} 
                />
            </div>

            <div className='form-control'>
                <label>Location</label>
                <input type='text' placeholder='Location of the company/institution/building' 
                value={location}  
                onChange={(e) => setLocation(e.target.value)} 
                />
            </div>

            <div className='form-control'>
                <label>Password</label>
                <input type='password' placeholder='Password' 
                value={password}  
                onChange={(e) => setPassword(e.target.value)} 
                />
            </div>

            <div className='form-control'>
                <label>Confirm password</label>
                <input type='password' placeholder='Confirm Password' 
                value={confirmPassword}  
                onChange={(e) => setConfirmPassword(e.target.value)} 
                />
            </div>

            <input type='submit' value='Sign Up' className='btn btn-block' />
        </form>
        </div>
    )
}

export default SignUp;