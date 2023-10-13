import React from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';

function OAuthSuccessPage() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Alert variant="success" className="text-center">
                        <Alert.Heading>Authentication Successful</Alert.Heading>
                        <p>Your OAuth authentication was successful!</p>
                        <p>Welcome back, [User Name]!</p>
                        <hr />
                        <p className="mb-0">You can now access your account and enjoy our services.</p>
                    </Alert>
                    <div className="text-center">
                        <Button variant="primary" href="/">
                            Go to 
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default OAuthSuccessPage;