import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMeterReadings, deleteMeterReading } from '../../api/apis'
import Table from '../../components/table'

const MeterReadings = () => {
    const [meterReadings, setMeterReadings] = useState([])
    const [message, setMessage] = useState('')

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
            accessor: 'slicedDate'
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
                    setMessage('Something went wrong.')
                }
            })
        }
        return () => { isMounted = false }
    }, [])

    if (meterReadings) {
        meterReadings.map((meterReading, i) => {
            meterReading.position = i + 1
            meterReading.slicedDate = meterReading.date.slice(0, 10)
            return meterReading
        })
    }

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
            <Link className='Link' to="/meterReadings">Meter Readings</Link>  &nbsp;
            <Link className='Link' to={"/meterReadingLineGraph"}>Meter Reading Graph</Link> &nbsp;
            <Link className='Link' to={"/addMeterReading"}>Add Meter Reading</Link>
            <div className='container'>
                {message && <p className='error'>{message}</p>}
                {meterReadings ? <Table COLUMNS={COLUMNS} DATA={meterReadings} onClickDelete={onClickDelete} editLink='/editMeterReading' /> : <p style={{ fontSize: '30px' }}> No meter reading found.</p>}
            </div>
        </div>
    )
}

export default MeterReadings
