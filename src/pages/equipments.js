import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Equipment from '../components/equipment'

const Equipments = () => {

    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        const getEquipments = async () => {
            const equipmentsFromServer = await fetchEquipments()
            setEquipments(equipmentsFromServer)
        }

        getEquipments()
        
    }, [])

    // Fetch Equipments

    const fetchEquipments = async () => {
        const res = await fetch(`${process.env.REACT_APP_BASEURL}/equipments`)
        const data = await res.json()
        
        return data
    }

    return (
        <div className='container'>
            <Link to="/equipments">Equipments</Link> &nbsp; 
            <Link to="/addEquipment">Add Equipment</Link>
            <div>
                {equipments.map((equipment) => (
                    <Equipment 
                        key={equipment.id}
                        equipment={equipment}
                    />
                ))}
            </div>
        </div>
    )
}

export default Equipments

