import { useState, useEffect } from 'react'
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar, ResponsiveContainer } from 'recharts'
import { Link } from 'react-router-dom'
import { getEquipments } from '../../api/apis'
import { Row, Col } from 'react-bootstrap'

const EquipmentBarChart = () => {
    const [equipments, setEquipments] = useState([])
    const [message, setMessage] = useState('')
    const [key, setKey] = useState('dailyCost')
    const [name, setName] = useState('Daily cost')

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            try {
                getEquipments().then((response) => {
                    if (response && response.status === 200) {
                        setEquipments(response.data.equipments)
                    } else {
                        setMessage(response.data.message)
                    }
                })
            } catch (error) {
                setMessage('Something went wrong.')
            }
        }
        return () => { isMounted = false }
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

    const handleChange = (event) => {
        if (event.target.value === 'dailyCost') {
            setKey('dailyCost')
            setName('Daily cost (Ksh)')
            return
        }
        if (event.target.value === 'monthlyCost') {
            setKey('monthlyCost')
            setName('Monthly cost (Ksh)')
            return
        }
        if (event.target.value === 'yearlyCost') {
            setKey('yearlyCost')
            setName('Annual cost (Ksh)')
        }
    }

    return (
        <div className='container'>
            <Link className='Link' to="/equipments">Go Back</Link>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='Link' to="/barGraph">Equipment energy cost graph</Link>  &nbsp;
            <div className='container'>
                {message && <p className='error'>{message}</p>}
                <Row>
                    <Col>
                        <select id="dropdown" onChange={handleChange} className='form-control'>
                            <option value="dailyCost">Daily cost</option>
                            <option value="monthlyCost">Monthly cost</option>
                            <option value="yearlyCost">Annual cost</option>
                        </select>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row><br />
                <h4 className='text-center'>Equipment energy cost (Ksh)</h4>
                <ResponsiveContainer width='100%' aspect={3}>
                    <BarChart width={730} height={250} data={equipments}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" name="Name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={key} name={name} fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default EquipmentBarChart
