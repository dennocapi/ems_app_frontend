import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { editEquipment } from '../../api/apis'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'


const EditEquipment = () => {

    const location = useLocation()
    const equipment = location.state

    const navigate = useNavigate();
    const [name, setName] = useState(equipment.name)
    const [type, setType] = useState(equipment.type)
    const [watts, setWatts] = useState(equipment.watts)
    const [number, setNumber] = useState(equipment.number)
    const [usage, setUsage] = useState(equipment.usage)
    const [message, setMessage] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault()

        try {
            let equipmentId = equipment._id
            await editEquipment({ name, type, watts, number, usage, equipmentId }).then((response) => {
                console.log('Response data', response.data)
                if (response && response.status === 200) {
                    alert('Equipment updated successfully.')
                    navigate('/equipments')
                } else {
                    console.log(response)
                    setMessage(response.data.message)
                }
            })
        } catch (e) {
            setMessage('Something went wrong.')
        }
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <h3>Edit Equipment</h3>
                {message && <p className='error'>{message}</p>}
                <Col>
                    <form className='add-form' onSubmit={onSubmit}>
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
                        <label>Usage</label>
                        <input type='number' placeholder='Number of hours used in a month'
                            value={usage}
                            onChange={(e) => setUsage(e.target.value)}
                        />
                    </div>
                </Col>
                <form onSubmit={onSubmit} className='text-center'>
                    <input type='submit' value='Edit equipment' className='btn btn-success' />
                </form>
                <Col></Col>
            </Row>
        </Container>
    )
}


export default EditEquipment;
