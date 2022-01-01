import { useState, useEffect } from 'react'
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts'
import { Link } from 'react-router-dom'

const EquipmentBarChart = () => {
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
            <Link to="/equipments">Equipments</Link>  &nbsp; 
            <Link to={"/addEquipment"}>Add Equipment</Link> <br />
            <Link to="/barGraph">Bar Graph</Link>  &nbsp;
            <Link to={"/pieChart"}>Pie Chart</Link>
            <div className='container'>
                <BarChart width={730} height={250} data={equipments}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="watts" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    )
}

export default EquipmentBarChart
