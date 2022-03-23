import { FaTimes, FaEdit } from 'react-icons/fa'
import { deleteEquipment } from '../../api/apis'

const Equipment = ({ equipment }) => {
    
    const onClick = async () => {
        
        if (window.confirm('Are you sure you want to delete this equipment?') === true) {
            let delEquipment = await deleteEquipment(equipment._id)
            if (delEquipment.data.deletedEquipment.statusCode === 200){
                window.location.reload()
            }
        }
        else {
            
        }
    }
    return (
        <div>
            <table className='table '>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Watts</th>
                    <th>Number</th>
                    <th></th>
                    <th></th>
                
                </tr>
                <tr>
                    <td>{equipment.position}</td>
                    <td>{equipment.name}</td>
                    <td>{equipment.type}</td>
                    <td>{equipment.watts}</td>
                    <td>{equipment.number}</td>
                    <td><FaEdit /></td>
                    <td><FaTimes
                    style={{ color: 'red', cursor: 'pointer' }} onClick={onClick}
                /></td>
                </tr>
            </table>
        </div>
    )
}

export default Equipment
