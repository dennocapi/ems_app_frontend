import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Equipment from './equipment'
import axios from 'axios'

const Equipments = () => {

    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_BASEURL}/equipments/getEquipments`).then((response) => {
            setEquipments(response.data.equipments)
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

