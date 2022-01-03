import { useState, useEffect } from 'react'
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts'
import { Link } from 'react-router-dom'
import axios from 'axios'

const EquipmentBarChart = () => {
    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_BASEURL}/equipments/getEquipments`).then((response) => {
            setEquipments(response.data.equipments)
          })
    },[])     
    return (
        <div className='container'>
            <Link className='Link' to="/equipments">Go Back</Link>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className='Link' to="/barGraph">Bar Graph</Link>  &nbsp;
            <Link className='Link' to={"/pieChart"}>Pie Chart</Link>
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
