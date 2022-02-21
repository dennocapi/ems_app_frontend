import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Equipment from './equipment'
import { getEquipments } from '../../api/apis'

const Equipments = () => {

    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        getEquipments().then((response) => {
            if (response && response.status === 200) {
                console.log("response from get equipments-----------")
                console.log(response)
                setEquipments(response.data.equipments)
            } else {
                console.log(response)
            }
        })
    },[])
    
    return (
        <div className='container'>
            <Link className='Link' to="/equipments">Equipments</Link>  &nbsp; 
            <Link className='Link' to={"/addEquipment"}>Add Equipment</Link> &nbsp; 
            <Link className='Link' to={"/barGraph"}>Power Charts</Link>
            <div className='container'>
                {equipments.map((equipment) => (
                    <Equipment 
                        key={equipment._id}
                        equipment={equipment}
                    />
                ))}
            </div>
        </div>
    )
}

export default Equipments

