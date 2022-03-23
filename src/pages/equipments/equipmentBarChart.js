import { useState, useEffect } from 'react'
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts'
import { Link } from 'react-router-dom'
import { userStore } from '../../store/stores'
import { getEquipments } from '../../api/apis'

const EquipmentBarChart = () => {
    const [equipments, setEquipments] = useState([])
    const user = userStore(state => state.user)

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
            {user &&<Link className='Link' to="/equipments">Go Back</Link>}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {user &&<Link className='Link' to="/barGraph">Bar Graph</Link>}  &nbsp;
            {user &&<Link className='Link' to={"/pieChart"}>Pie Chart</Link>}
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
