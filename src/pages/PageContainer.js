import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PageTitle from './PageTitle';

const PageContainer = ({ title, children }) => {
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={8}>
            <PageTitle title={title} />
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageContainer;
