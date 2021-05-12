import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CentreList from "./CentreList";
import Setmap from "./Setmap";

function App() {
  const [pinCode, setPinCode] = useState("243001");
  const [date, setDate] = useState(moment(new Date()).format("DD-MM-YYYY"));
  const [type, setType] = useState("COVAXIN");
  const [centers, setCenters] = useState([]);

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  });

  const handleTypeChange = (event) => {
    if (event.target.checked) {
      setType(event.target.value);
    }
  };

  const getData = async () => {
    const response = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pinCode}&date=${date}`
    );
    response
      .json()
      .then((data) => {
        setCenters(data.centers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col lg="4" md="12">
          <Form>
            <Form.Group controlId="pinCode">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pin code"
                value={pinCode}
                onChange={(event) => setPinCode(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="vaccineType">
              <Form.Check
                type="radio"
                label="COVISHIELD"
                name="group1"
                id="covishield-1"
                value="COVISHIELD"
                onChange={handleTypeChange}
                checked={type === "COVISHIELD"}
              />
              <Form.Check
                type="radio"
                label="COVAXIN"
                name="group1"
                id="covaxin-2"
                value="COVAXIN"
                onChange={handleTypeChange}
                checked={type === "COVAXIN"}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={getData}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <CentreList centers={centers}></CentreList>
          {/* <Setmap /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
