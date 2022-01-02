import { useState, useEffect } from 'react'
import ElectricalBill from './electricalBill'
import { Link } from 'react-router-dom'

const ElectricalBills = () => {
    const [electricalBills, setElectricalBills] = useState([])

    useEffect(() => {
        const getElectricalBills = async () => {
            const electricalBillsFromServer = await fetchElectricalBills()
            setElectricalBills(electricalBillsFromServer)
        }

        getElectricalBills()

    }, [])

    const fetchElectricalBills = async () => {
        const res = await fetch(`${process.env.REACT_APP_BASEURL}/electricalBills`)
        const data = await res.json()
        return data
    }

    return (
        <div className='container'>
            <Link className='Link' to="/electricalBills">Electrical Bills</Link>  &nbsp; 
            <Link className='Link' to={"/electricalBillLineGraph"}>Bill Graph</Link> &nbsp; 
            <Link className='Link' to={"/addBill"}>Add Electrical Bill</Link>
            <div className='container'>
                {electricalBills.map((electricalBill) => (
                    <ElectricalBill
                        key={electricalBill.id}
                        electricalBill={electricalBill}
                    />
                ))}
            </div>
        </div>
    )
}

export default ElectricalBills
