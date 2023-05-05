import React, { useContext } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './UserProfile.css';
import { AuthContext } from '../../providers/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

  return (
    <Container className='height-control'>
      <Row className="user-profile d-flex align-items-center">
        <Col md={3}>
          <div className='p-5'>
          <Image src={user.photoURL} alt="Profile photo" fluid roundedCircle />
          </div>
        </Col>
        <Col md={9}>
          <h2>{user.displayName}</h2>
          <p>Email: {user.email}</p>
          <Button variant="secondary">Edit Profile</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
