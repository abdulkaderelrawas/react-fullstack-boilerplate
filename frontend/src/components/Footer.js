import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Made with Love by Abdulkader El Rawas
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
