import { FaTimes } from 'react-icons/fa'

const Equipment = ({ equipment }) => {
    return (
        <div className='equipment'>
            <h3>
                Name: {equipment.name}
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer' }} 
                />
            </h3>
            <p>Watts: {equipment.watts}</p>
            <p>Number: {equipment.number}</p>
        </div>
    )
}

export default Equipment
