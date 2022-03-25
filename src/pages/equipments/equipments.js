import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getEquipments, deleteEquipment, getEquipment } from '../../api/apis'
import Table from '../../components/table'

const Equipments = () => {
    const [equipments, setEquipments] = useState([])
    const [equipment, setEquipment] = useState('')
    const [message, setMessage] = useState('')

    const COLUMNS = [
        {
            Header: '',
            accessor: 'position'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Type',
            accessor: 'type'
        },
        {
            Header: 'Watts',
            accessor: 'watts'
        },
        {
            Header: 'Number',
            accessor: 'number'
        },
        {
            Header: 'Daily cost(Ksh)',
            accessor: 'dailyCost'
        },
        {
            Header: 'Monthly cost(Ksh)',
            accessor: 'monthlyCost'
        },
        {
            Header: 'Yearly cost(Ksh)',
            accessor: 'yearlyCost'
        },

    ]

    useEffect(() => {
        try {
            getEquipments().then((response) => {
                if (response && response.status === 200) {
                    let equipments = response.data.equipments
                    setEquipments(equipments)
                }
                else if (response && response.status === 204) {
                    setEquipments(null)
                } else {
                    setMessage(response.data.message)
                }
            })
        } catch (e) {
            setMessage('Something went wrong.')
        }

    }, [])

    equipments.map((equipment, i) => {

        let energyInKwHrs = (equipment.watts * equipment.usage / 1000)
        let costOfOneKwHr = 21.87
        let costPerDay = energyInKwHrs * costOfOneKwHr
        let costPerMonth = costPerDay * 30
        let costPerYear = costPerDay * 365

        equipment.position = i + 1
        equipment.dailyCost = Math.ceil(costPerDay * 100) / 100
        equipment.monthlyCost = Math.ceil(costPerMonth * 100) / 100
        equipment.yearlyCost = Math.ceil(costPerYear * 100) / 100

        return equipment
    })


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
        try{
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
        } catch(error){
            setMessage('Something went wrong.')
        }
    }

    return (
        <div className='container'>
            <Link className='Link' to="/equipments">Equipment</Link> &nbsp;
            <Link className='Link' to="/addEquipment">Add Equipment</Link> &nbsp;
            <Link className='Link' to="/barGraph">Equipment energy cost graph</Link>
            <div className='container'>
                {message && <p className='error'>{message}</p>}
                {equipments ? <Table COLUMNS={COLUMNS} DATA={equipments} onClickDelete={onClickDelete} onClickEdit={onClickEdit} element={equipment} editLink='/editEquipment' /> : <p style={{ fontSize: '30px' }}> No equipments found.</p>}
            </div>
        </div>
    )
}

export default Equipments

