import { useState } from 'react'
import { Link } from 'react-router-dom'
import {addElectricalEquipment} from '../../api/apis'
import { useNavigate } from 'react-router-dom'

const AddEquipment = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [watts, setWatts] = useState('')
    const [number, setNumber] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please input name of equipment')
            return
        }
        if (!type) {
            alert('Please input the type of equipment')
            return
        }
        if (!watts) {
            alert('Please the wattage of the equipment')
            return
        }
        if (!number) {
            alert('Please enter number of equipments')
            return
        }
        
        try {
            addElectricalEquipment({ name, type, watts, number }).then((response) => {
                if (response && response.status === 200) {
                    navigate('/equipments')
                } else {
                    console.log(response)
                }
            })
        } catch (e) {
            console.log(e)
        }

        setName('')
        setType('')
        setWatts('')
        setNumber('')
    }

    return (
        <div className='container'>
            <Link className='Link' to="/equipments">Equipments</Link>  &nbsp;
            <Link className='Link' to={"/addEquipment"}>Add Equipment</Link> &nbsp;
            <Link className='Link' to={"/barGraph"}>Power Charts</Link>
            <div className='signInContainer'>
                <h3>Add Equipment</h3>

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
                    <div className='form-control'>
                        <label>Number</label>
                        <input type='number' placeholder='Number of the equipments'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>

                    <input type='submit' value='Add' className='btn btn-block' />
                </form>
            </div>
        </div>
    )
}


export default AddEquipment;
