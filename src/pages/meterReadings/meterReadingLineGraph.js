import { useState, useEffect } from 'react'
import { Tooltip, LineChart, XAxis, YAxis, Legend, CartesianGrid, Line } from 'recharts'
import { Link } from 'react-router-dom'
import { userStore } from '../../store/stores'
import { getMeterReadings } from '../../api/apis'

const MeterReadingLineGraph = () => {

    const [meterReadings, setMeterReadings] = useState([])
    const user = userStore(state => state.user)

    useEffect(() => {
          let isMounted = true
          if(isMounted){
          getMeterReadings().then((response) => {
              if (response && response.status === 200) {
                  setMeterReadings(response.data.meterReadings)
              } else {
                  console.log(response)
              }
          })}
          return () => { isMounted = false }
    },[]) 

    return (
        <div className='container'>
            {user &&<Link className='Link' to="/meterReadings">Meter Readings</Link>}  &nbsp; 
            {user &&<Link className='Link' to={"/meterReadingLineGraph"}>Meter Reading Graph</Link>} &nbsp; 
            {user &&<Link className='Link' to={"/addMeterReading"}>Add Meter Reading</Link>}
            <div className='container'>
                <LineChart width={730} height={250} data={meterReadings}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="meterReading" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    )
}

export default MeterReadingLineGraph
