import { useState } from 'react'
import { Link } from 'react-router-dom'
import { addElectricalEquipment } from '../../api/apis'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

const AddEquipment = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [watts, setWatts] = useState('')
    const [number, setNumber] = useState('')
    const [usage, setUsage] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            addElectricalEquipment({ name, type, watts, number, usage }).then((response) => {
                if (response && response.status === 200) {
                    navigate('/equipments')
                } else {
                    setMessage(response.data.message)
                }
            })
        } catch (e) {
            console.log(e)
            setMessage('Something went wrong.')
        }
    }

    return (
        <div className='container'>
            <Link className='Link' to="/equipments">Equipment</Link>  &nbsp;
            <Link className='Link' to={"/addEquipment"}>Add Equipment</Link> &nbsp;
            <Link className='Link' to={"/barGraph"}>Power Charts</Link>
            <Container>
                <Row>
                    <Col></Col>
                    <h3>Add Equipment</h3>
                    {message && <p className='error'>{message}</p>}
                    <Col>
                        <div>
                            <form className='add-form'>
                                <div className='form-control'>
                                    <label>Name</label>
                                    <input type='text' placeholder='Name of equipment'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label>Type</label>
                                    <input type='type' placeholder='Type of equipment'
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                    />
                                </div>
                                <div className='form-control'>
                                    <label>Watts</label>
                                    <input type='number' placeholder='Equipment Wattage'
                                        value={watts}
                                        onChange={(e) => setWatts(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <div className='form-control'>
                            <label>Number</label>
                            <input type='number' placeholder='Number of the equipments'
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div className='form-control'>
                            <label>Hours used in a day</label>
                            <input type='number' placeholder='Usage per day(Hours)'
                                value={usage}
                                onChange={(e) => setUsage(e.target.value)}
                            />
                        </div>
                    </Col>
                    <form className="add-form text-center" onSubmit={onSubmit}>
                        <input type='submit' value='Add equipment' className='btn btn-success' />
                    </form>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}


export default AddEquipment;
