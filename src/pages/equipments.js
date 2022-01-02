import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Equipment from './equipment'

const Equipments = () => {

    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        const getEquipments = async () => {
            const equipmentsFromServer = await fetchEquipments()
            setEquipments(equipmentsFromServer)
        }

        getEquipments()
        
    }, [])

    const fetchEquipments = async () => {
        const res = await fetch(`${process.env.REACT_APP_BASEURL}/equipments`)
        const data = await res.json()
        
        return data
    }

    return (
        <div className='container'>
            <Link className='Link' to="/equipments">Equipments</Link>  &nbsp; 
            <Link className='Link' to={"/addEquipment"}>Add Equipment</Link> &nbsp; 
            <Link className='Link' to={"/barGraph"}>Power Charts</Link>
            <div className='container'>
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

