import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userStore } from '../../store/stores'
import { getMeterReadings, deleteMeterReading } from '../../api/apis'
import Table from '../../components/table'

const MeterReadings = () => {
    const [meterReadings, setMeterReadings] = useState([])
    const user = userStore(state => state.user)

    const COLUMNS = [
        {
            Header: '',
            accessor: 'position'
        },
        {
            Header: 'Amount',
            accessor: 'meterReading'
        },
        {
            Header: 'Date',
            accessor: 'createdAt'
        },

    ]

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            getMeterReadings().then((response) => {
                if (response && response.status === 200) {
                    setMeterReadings(response.data.meterReadings)
                }
                else if (response && response.status === 204) {
                    setMeterReadings(null)
                }
                else {
                    console.log(response)
                }
            })
        }
        return () => { isMounted = false }
    }, [])

    const onClickDelete = async (readingId) => {
        if (window.confirm('Are you sure you want to delete this meter reading?') === true) {
            let delReading = await deleteMeterReading(readingId)
            if (delReading.data.deletedMeterReading.statusCode === 200) {
                window.location.reload()
            }
            console.log(delReading.data)
        }
        else {

        }
    }

    return (
        <div className='container'>
            {user && <Link className='Link' to="/meterReadings">Meter Readings</Link>}  &nbsp;
            {user && <Link className='Link' to={"/meterReadingLineGraph"}>Meter Reading Graph</Link>} &nbsp;
            {user && <Link className='Link' to={"/addMeterReading"}>Add Meter Reading</Link>}
            <div className='container'>
                {meterReadings ? <Table COLUMNS={COLUMNS} DATA={meterReadings} onClickDelete={onClickDelete} /> : <p style={{ fontSize: '30px' }}> No meter reading found.</p>}
            </div>
        </div>
    )
}

export default MeterReadings
