import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <Container>
      <Row>
        <Col>
          <Card className="border-primary" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><b>Cost calculator</b></Card.Title>
              <Card.Text>
                Electrical energy cost calculator for a specific equipment.
              </Card.Text>
              <Button variant="success" ><Link className='text-white' to="/costCalculator">Calculator</Link></Button>
            </Card.Body>
          </Card>
          <Card className="border-warning" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><b>Equipment</b></Card.Title>
              <Card.Text>
                View all your equipment, usage and power consumption.
              </Card.Text>
              <Button variant="success" ><Link className='text-white' to="/equipments">Equipment</Link></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-danger" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><b>Billing</b></Card.Title>
              <Card.Text>
                View all your bills here.
              </Card.Text>
              <Button variant="success"><Link className='text-white' to="/electricalBills">Electrical Bills</Link></Button>
            </Card.Body>
          </Card>
          <Card className="border-success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><b>Notifications</b></Card.Title>
              <Card.Text>
                View Notifications and energy saving tips.
              </Card.Text>
              <Button variant="success"><Link className='text-white' to="/meterReadings">Meter Readings</Link></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="border-info" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title><b>Meter readings</b></Card.Title>
              <Card.Text>
                View all your meter readings here.
              </Card.Text>
              <Button variant="success"><Link className='text-white' to="/meterReadings">Meter Readings</Link></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;