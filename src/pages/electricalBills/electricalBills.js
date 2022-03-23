import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getElectricalBills, deleteBill } from '../../api/apis'
import Table from '../../components/table'

const ElectricalBills = () => {
    const [electricalBills, setElectricalBills] = useState([])

    const COLUMNS = [
        {
            Header: '',
            accessor: 'position'
        },
        {
            Header: 'Amount',
            accessor: 'amount'
        },
        {
            Header: 'Date',
            accessor: 'createdAt'
        },

    ]

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            getElectricalBills().then((response) => {
                if (response && response.status === 200) {
                    setElectricalBills(response.data.electricalBills)
                }
                else if (response && response.status === 204) {
                    setElectricalBills(null)

                } else {
                    console.log(response)
                }
            })
        }
        return () => { isMounted = false }
    }, [])

    const onClickDelete = async (billId) => {
        if (window.confirm('Are you sure you want to delete this record?') === true) {
            let delBill = await deleteBill(billId)
            if (delBill.data.deletedElectricalBill.statusCode === 200) {
                window.location.reload()
            }
            console.log(delBill.data)
        }
        else {

        }
    }


    return (
        <div className='container'>
            <Link className='Link' to="/electricalBills">Electrical Bills</Link>  &nbsp;
            <Link className='Link' to={"/electricalBillLineGraph"}>Bill Graph</Link> &nbsp;
            <Link className='Link' to={"/addElectricalBill"}>Add Electrical Bill</Link>
            <div className='container'>
                {electricalBills ? <Table COLUMNS={COLUMNS} DATA={electricalBills} onClickDelete={onClickDelete} /> : <p style={{ fontSize: '30px' }}> No bill records found.</p>}
            </div>
        </div>
    )
}

export default ElectricalBills
