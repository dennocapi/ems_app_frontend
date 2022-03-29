import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

const Table = ({ COLUMNS, DATA, onClickDelete, editLink }) => {

    const columns = useMemo(() => COLUMNS, [COLUMNS])
    const data = useMemo(() => DATA, [DATA])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <Container>
            <Row>
                <table {...getTableProps()} >
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{ backgroundColor: '#000352' }}
                                    >
                                        {column.render('Header')}

                                    </th>
                                ))}
                                <th style={{ backgroundColor: '#000352' }}></th>
                                <th style={{ backgroundColor: '#000352' }}></th>
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}

                                    <td><Link to={editLink} state={row.original}><FaEdit style={{ color: 'blue' }} onClick={() => { }} /></Link></td>
                                    <td><FaTimes style={{ color: 'red' }} onClick={() => onClickDelete(row.original._id)} /></td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Row>
        </Container>
    )
}

export default Table