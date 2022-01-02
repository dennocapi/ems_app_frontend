import { useState, useEffect } from 'react'
import { PieChart, Pie, Tooltip, Legend } from 'recharts'
import { Link } from 'react-router-dom'

const EquipmentPieChart = () => {

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
            <Link className='Link' to="/equipments">Go Back</Link>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='Link' to="/barGraph">Bar Graph</Link>  &nbsp;
            <Link className='Link' to={"/pieChart"}>Pie Chart</Link>
            <div className='container'>
                <PieChart width={730} height={400}>
                    <Pie data={equipments} isAnimationActive={false} dataKey="watts" nameKey="name" cx="50%" cy="50%" outerRadius={200} fill="#82ca9d" label />
                    <Tooltip />
                    <Legend layout="vertical" verticalAlign="top" align="right" />
                </PieChart>
            </div>
        </div>
    )
}

export default EquipmentPieChart
