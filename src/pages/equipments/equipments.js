import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getEquipments, deleteEquipment, getEquipment } from '../../api/apis'
import { userStore } from '../../store/stores';
import Table from '../../components/table'

const Equipments = () => {
    const [equipments, setEquipments] = useState([])
    const user = userStore(state => state.user)
    const [equipment, setEquipment] = useState('')

    const COLUMNS = [
        {
            Header: '',
            accessor: 'position'
        },
        {
            Header: 'name',
            accessor: 'name'
        },
        {
            Header: 'type',
            accessor: 'type'
        },
        {
            Header: 'watts',
            accessor: 'watts'
        },
        {
            Header: 'number',
            accessor: 'number'
        },
    ]

    useEffect(() => {
        getEquipments().then((response) => {
            if (response && response.status === 200) {
                let equipments = response.data.equipments
                setEquipments(equipments)
                
                equipments.map((equipment, i) => {
                    equipment.position = i + 1
                    return equipment
                })
            }
            else if (response && response.status === 204) {
                setEquipments(null)
            } else {
                console.log(response)
            }
        })

    }, [])


    const onClickDelete = async (equipmentId) => {
        if (window.confirm('Are you sure you want to delete this equipment?') === true) {
            let delEquipment = await deleteEquipment(equipmentId)
            if (delEquipment.data.deletedEquipment.statusCode === 200) {
                window.location.reload()
            }
            console.log(delEquipment.data)
        }
        else {

        }
    }

    const onClickEdit = async (equipmentId) => {
        getEquipment(equipmentId).then((response) => {
            if (response && response.status === 200) {
                let equipment = response.data.equipment
                setEquipment(equipment)
            }
            else if (response && response.status === 204) {
                setEquipment(null)
            } else {
                console.log(response)
                setEquipment([])
            }
        })
    }

    return (
        <div className='container'>
            {user &&
                <Link className='Link' to="/equipments">Equipments</Link>} &nbsp;
            {user &&
                <Link className='Link' to={"/addEquipment"}>Add Equipment</Link>} &nbsp;
            {user &&
                <Link className='Link' to={"/barGraph"}>Power Charts</Link>}
            <div className='container'>
                {equipments ? <Table COLUMNS={COLUMNS} DATA={equipments} onClickDelete={onClickDelete} onClickEdit={onClickEdit} element={equipment} /> : <p style={{ fontSize: '30px' }}> No equipments found.</p>}
            </div>
        </div>
    )
}

export default Equipments

