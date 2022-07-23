import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import User from './components/User.jsx'

import Card from "react-bootstrap/Card";


function App() {
	const [customers, setCustomers] = useState([
		{ name: "Eric", email: "eric@gmail.com", gen: "3" },
		{ name: "Yaw", email: "yaw@gmail.com", gen: "67" },
		{ name: "Enock", email: "enock@gmail.com", gen: "3" },
		{ name: "Mary", email: "mary@gmail.com", gen: "67" },
   
	]);
	return (
		<>
			<Container>
				<Row>
					<Col md={6}>
          <User mycustomers={customers}/>
					</Col>

					<Col md={6}>
				
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default App;