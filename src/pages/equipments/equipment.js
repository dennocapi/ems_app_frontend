import { FaTimes } from 'react-icons/fa'

const Equipment = ({ equipment }) => {
    return (
        <div className='equipment'>
            <h4>
                Name: {equipment.name}
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                />
            </h4>
            <p>Type: {equipment.type}</p>
            <p>Watts: {equipment.watts}</p>
            <p>Number: {equipment.number}</p>
        </div>
    )
}

export default Equipment
