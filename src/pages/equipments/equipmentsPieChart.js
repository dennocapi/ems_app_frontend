import { useState, useEffect } from 'react'
import { PieChart, Pie, Tooltip, Legend } from 'recharts'
import { Link } from 'react-router-dom'
import { getEquipments } from '../../api/apis'

const EquipmentPieChart = () => {
    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        let isMounted = true
        if(isMounted){
        getEquipments().then((response) => {
            if (response && response.status === 200) {
                setEquipments(response.data.equipments)
            } else {
                console.log(response)
            }
        })}
        return () => { isMounted = false }
    },[]) 

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
