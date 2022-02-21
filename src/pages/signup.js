import { useState } from 'react'
import { registerUser } from '../api/apis';
import { userStore } from '../store/stores';

const SignUp = () => {
    const storeUser = userStore(state => state.storeUser)
    const setLoadingUser = userStore(state => state.setLoadingUser)
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [companyName, setCompanyName] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!email) {
            alert('Please input email')
            return
        }
        if (!location) {
            alert('Please location')
            return
        }
        if (!password) {
            alert('Please input password')
            return
        }
        if (!confirmPassword) {
            alert('Please input confirm password')
            return
        }
        if (!companyName) {
            alert('Please input company name')
            return
        }
        if (password !== confirmPassword) {
            alert('Password mismatch!')
            return
        }

        try {
            setLoadingUser(true)
            registerUser({ email: email, password: password, companyName: companyName, location: location }).then(response => {
                if (response && response.status === 200) {
                    storeUser(response.data.user)
                    setLoadingUser(false)
                    window.location.href = "/"
                    // console.log(response)
                } else {
                    console.log(response)
                    setLoadingUser(false)
                }
            })
        } catch (e) {
            console.log(e)
        }

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