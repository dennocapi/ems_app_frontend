import { useState } from 'react'
import { Link } from 'react-router-dom'

const AddEquipment = () => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [watts, setWatts] = useState('')
    const [number, setNumber] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please input email')
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

        // onAdd({ text, date, reminder })

        setName('')
        setType('')
        setWatts('')
        setNumber('')
    }

    return (
        <div className='container'>
            <Link to="/equipments">Equipments</Link> &nbsp; 
            <Link to="/addEquipment">Add Equipment</Link>
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
