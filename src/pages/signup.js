import { useState } from 'react'
import { registerUser } from '../api/apis';
import { userStore } from '../store/stores';
import { Row, Col } from 'react-bootstrap'

const SignUp = () => {
    const storeUser = userStore(state => state.storeUser)

    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [companyName, setCompanyName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        registerUser({ email: email, password: password, companyName: companyName, location: location }).then(response => {
            
            if (response && response.status === 200) {
                storeUser(response.data.user)
                window.location.href = "/"
                return false;
            } else {
                setMessage(response.data.message)
            }
        }).catch(error => {
            setMessage('Something went wrong.')
        })
    }

    return (
            <div className="signUpContainer">
                <Row>
                    <Col></Col>
                    <h3>Sign Up and get started</h3>
                    {message && <p className='error'>{message}</p>}
                    <Col>
                        <form className='add-form'>

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
                        </form>
                    </Col>
                    <Col>
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
                    </Col>
                    <form onSubmit={onSubmit}>
                    <input type='submit' value='Sign up' className='btn btn-primary btn-block' />
                    </form>
                    <Col></Col>
                </Row>
            </div>
    )
}

export default SignUp;