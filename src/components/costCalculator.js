import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const CostCalculator = () => {

    const [rating, setRating] = useState("")
    const [usage, setUsage] = useState("")
    const [cDay, setCostPerDay] = useState("")
    const [cMonth, setCostPerMonth] = useState("")
    const [cYear, setCostPerYear] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        let energyInKwHrs = (rating * usage / 1000)
        console.log('energy-------: ', energyInKwHrs)
        let costOfOneKwHr = 21.87

        let costPerDay = energyInKwHrs * costOfOneKwHr
        let costPerMonth = costPerDay * 30
        let costPerYear = costPerDay * 365

        setCostPerDay(costPerDay)
        setCostPerMonth(costPerMonth)
        setCostPerYear(costPerYear)
    }

    const reset = ()=>{
        setRating('')
        setUsage('')
        setCostPerDay('')
        setCostPerMonth('')
        setCostPerYear('')
    }

    return (
        <div className="container">
            <Container fluid="md">
                <Row>
                    <Col></Col>
                    <Col>
                        <h3>Cost Calculator</h3>
                        <form className='form-group' onSubmit={handleSubmit}>
                            <label>Power rating in watts:
                                <input
                                    className='form-control'
                                    type="number"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </label><br />
                            <label>Hours of use per day:
                                <input
                                    className='form-control'
                                    type="number"
                                    value={usage}
                                    onChange={(e) => setUsage(e.target.value)}
                                />
                            </label><br />
                            <input className="btn btn-success btn-sm " type="submit" value="Calculate" />
                            <input className = "btn btn-secondary btn-sm" type="reset" onClick={reset} />
                        </form></Col>
                    <Col>
                        <h3>Results</h3>
                        <label>Energy cost per day:
                            <input
                                className='form-control'
                                type="text"
                                defaultValue={cDay}
                            />
                        </label><br />
                        <label>Energy cost per month:
                            <input
                                className='form-control'
                                type="text"
                                defaultValue={cMonth}
                            />
                        </label><br />
                        <label>Energy cost per year:
                            <input
                                className='form-control'
                                type="text"
                                defaultValue={cYear}
                            />
                        </label><br />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>

    )
}

export default CostCalculator